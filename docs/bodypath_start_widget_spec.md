# BodyPath “Start Your BodyPath” Widget Spec

## Purpose

The **Start Your BodyPath** widget is the core conversion product for BodyPath.

It is not a chatbot. It is a structured health-navigation intake that helps a consumer move from vague concern to a personalized, educational next-step plan.

The widget should support four layers:

1. **Intake** — dynamic questions that capture the user’s goal, symptoms, context, constraints, and urgency.
2. **Pattern Engine** — simple weighted rules that identify likely health-navigation pathways.
3. **Recommendations** — educational next steps, lab suggestions, and provider-routing suggestions.
4. **Monetization** — lab purchase paths, provider referral paths, waitlist capture, and future partner routing.

The first version should avoid diagnosis, treatment claims, or medical certainty. It should position outputs as **educational guidance** and **care-navigation suggestions**.

---

## Product Positioning

### Core Promise

**Understand what your body may be telling you — and what to do next.**

### Widget CTA

**Start Your BodyPath**

### User Mental Model

The user should feel like:

> “I answered a few structured questions, and BodyPath helped me understand the most relevant health areas to explore, what labs might be useful, and which kind of provider or care option may fit my situation.”

### What the Product Is

BodyPath is a **personalized next-step health navigation workflow**.

It helps the user organize:
- symptoms
- health goals
- risk factors
- existing lab data
- provider preferences
- budget and urgency

Then it returns:
- prioritized “pathways”
- suggested labs to consider
- educational explanations
- provider/care routing options
- next actions

### What the Product Is Not

BodyPath should not claim to:
- diagnose disease
- prescribe medication
- replace a clinician
- guarantee that a user has a condition
- guarantee that a lab or provider is medically necessary
- provide emergency care

---

## Compliance and Safety Guardrails

### Medical Disclaimer Language

Use clear language throughout the results experience:

> BodyPath provides educational health-navigation information. It does not diagnose, treat, prescribe, or replace a licensed medical professional. If you have urgent symptoms, seek emergency care.

### Emergency / Red-Flag Handling

The intake must detect red-flag symptoms and route the user away from normal results.

If the user selects any urgent red flag, the widget should show an immediate safety message instead of continuing.

Potential red flags:
- chest pain
- trouble breathing
- fainting or loss of consciousness
- stroke-like symptoms
- severe allergic reaction
- suicidal thoughts or self-harm thoughts
- severe abdominal pain
- sudden weakness or numbness
- uncontrolled bleeding
- severe dehydration
- pregnancy with severe pain or bleeding

Output:

> Some of your answers may involve symptoms that should be evaluated urgently. BodyPath is not for emergencies. Please call emergency services or seek urgent medical care now.

The user may optionally continue only after acknowledging:

> I understand BodyPath is not for urgent care and I want to continue for educational purposes.

### Mental Health Safety

If the user indicates self-harm thoughts, the widget should stop and show crisis guidance.

Recommended output:

> If you may hurt yourself or are in immediate danger, call emergency services now. In the U.S., call or text 988 to reach the Suicide & Crisis Lifeline.

Do not show monetized recommendations in this path.

### Data Privacy Guardrail for MVP

For the first version:
- do not require account creation
- do not store sensitive health data unless explicitly added later
- avoid collecting full date of birth
- avoid collecting address
- avoid collecting insurance ID
- avoid collecting names unless needed for follow-up
- use age range instead of exact age
- use optional email capture only after results

Recommended language near email capture:

> Email is optional. We’ll only use it to send your BodyPath summary and updates you request.

---

# Layer 1 — Intake

The intake layer should collect enough structured information to produce useful next-step guidance without feeling like a long medical questionnaire.

The first version should support one primary general flow that branches based on user goals.

## Intake Design Principles

### 1. Start with intent, not demographics

The first question should ask what the user wants help with. This improves completion rate and creates routing context immediately.

### 2. Use structured choices first

Use checkboxes, radio buttons, and short inputs. Avoid open-ended medical chat in the MVP.

### 3. Ask only what changes the recommendation

Every question should contribute to:
- pathway scoring
- safety routing
- lab recommendation
- provider routing
- monetization path
- personalization copy

### 4. Progressive disclosure

Ask deeper questions only when relevant.

Example:
- If user selects “women’s hormones / menopause,” ask cycle/perimenopause questions.
- If user selects “weight / GLP-1,” ask BMI-relevant and metabolic questions.
- If user selects “sleep,” ask snoring and sleep-quality questions.

---

## Step 0 — Welcome / Framing

### Goal

Explain what the widget does and set expectations.

### Suggested copy

**Start Your BodyPath**

Answer a few questions about your symptoms, goals, and health context. BodyPath will help organize what may be worth exploring next — including common labs, care options, and provider types to consider.

### Required acknowledgement

User should confirm:

- I understand BodyPath is educational and not a diagnosis.
- I understand urgent symptoms require urgent medical care.

### Continue CTA

**Start**

---

## Step 1 — Primary Goal

### Question

**What do you want help understanding today?**

### Input type

Single-select.

### Options

1. **Low energy or fatigue** — `fatigue`
2. **Hormones or menopause** — `hormones_menopause`
3. **Weight, metabolism, or GLP-1 options** — `metabolic_glp1`
4. **Sleep and recovery** — `sleep_recovery`
5. **Stress, mood, or burnout** — `stress_mood`
6. **Testosterone or men’s health** — `mens_health_testosterone`
7. **I have lab results and want to understand them** — `lab_interpretation`
8. **I’m not sure — I just don’t feel right** — `general_uncertainty`

### Architecture note

This answer sets the primary pathway seed but should not determine the final result alone. Later symptoms and context can elevate other pathways.

---

## Step 2 — Main Symptoms

### Question

**Which symptoms or changes are you noticing?**

### Input type

Multi-select.

### Core options

- Low energy
- Brain fog
- Poor sleep
- Weight gain
- Weight loss without trying
- Hair thinning or hair loss
- Feeling cold often
- Feeling hot often
- Night sweats
- Mood changes
- Anxiety or worry
- Low mood
- Low libido
- Irregular periods
- Heavy periods
- Hot flashes
- Muscle loss or weakness
- Increased thirst
- Frequent urination
- Snoring
- Waking up tired
- Digestive issues
- Cravings or hunger changes
- Headaches
- Joint or muscle aches
- Skin changes
- None of these / not sure

### Red-flag options

Include a separate safety grouping for:

- Chest pain
- Trouble breathing
- Fainting
- Sudden weakness or numbness
- Thoughts of self-harm
- Severe pain
- Pregnancy-related severe pain or bleeding

If selected, trigger red-flag flow.

### Pattern use

Symptoms should add weights to one or more pathways.

Example:
- low energy → fatigue_core +2
- brain fog → fatigue_core +1, sleep_recovery +1, stress_mood +1
- hot flashes → menopause +3
- snoring → sleep_apnea +3
- frequent urination → metabolic +2
- low libido → testosterone/hormones +2

---

## Step 3 — Duration and Change Pattern

### Question

**How long has this been going on?**

### Input type

Single-select.

### Options

- Less than 2 weeks
- 2–6 weeks
- 1–3 months
- 3–12 months
- More than a year
- It comes and goes
- Not sure

### Follow-up question

**Is this getting worse, improving, or staying about the same?**

Options:
- Getting worse
- About the same
- Improving
- Comes and goes
- Not sure

### Pattern use

- persistent symptoms increase recommendation confidence
- rapidly worsening symptoms should encourage provider evaluation
- very recent mild symptoms should reduce aggressive recommendations

---

## Step 4 — Basic Context

### Question group

**A little context helps us personalize your BodyPath.**

### Inputs

#### Age range

Single-select:
- Under 18
- 18–24
- 25–34
- 35–44
- 45–54
- 55–64
- 65+

If under 18:
- show “BodyPath is currently designed for adults.”
- recommend discussing symptoms with parent/guardian and licensed clinician.
- optionally stop flow.

#### Sex assigned at birth

Single-select:
- Female
- Male
- Intersex
- Prefer not to say

#### Gender identity / relevant health context

Optional:
- Woman
- Man
- Nonbinary
- Prefer not to say
- Something else

#### Pregnancy / postpartum status

Ask only if relevant based on sex/gender selection:
- Pregnant
- Postpartum within 12 months
- Trying to conceive
- None of these
- Prefer not to say

### Pattern use

- age 40–55 + symptoms such as hot flashes, cycle changes, sleep disruption → menopause/perimenopause pathway
- male + low libido + fatigue + muscle loss → testosterone pathway
- pregnancy/postpartum modifies recommendations and should increase provider-first guidance

---

## Step 5 — Health Goals

### Question

**What outcome matters most to you right now?**

### Input type

Multi-select, max 3.

### Options

- More energy
- Better sleep
- Weight loss
- Understand my hormones
- Understand my lab results
- Reduce stress
- Improve mood
- Improve libido
- Check metabolic health
- Explore GLP-1 options
- Build a preventive health baseline
- Know what labs to ask for
- Find the right provider or program
- I want reassurance

### Pattern use

Goals influence final ordering and CTAs.

Example:
- “Know what labs to ask for” elevates lab recommendations.
- “Find the right provider” elevates referral/routing modules.
- “Explore GLP-1 options” elevates metabolic/GLP-1 pathway.

---

## Step 6 — Known Health Context

### Question

**Do any of these apply to you?**

### Input type

Multi-select.

### Options

- Thyroid condition
- Diabetes or prediabetes
- High cholesterol
- High blood pressure
- PCOS
- Menopause or perimenopause
- Sleep apnea
- Depression or anxiety diagnosis
- Autoimmune condition
- Anemia or low iron history
- Vitamin D deficiency
- Taking a GLP-1 medication
- Considering a GLP-1 medication
- Taking hormone therapy
- Taking testosterone therapy
- None of these
- Not sure

### Pattern use

Known context should:
- increase relevant pathway confidence
- modify copy
- prevent simplistic recommendations
- encourage clinician review for complex cases

---

## Step 7 — Medications and Constraints

### Question

**Are there any medications or constraints we should consider?**

### Input type

Multi-select.

### Options

- Prescription medications
- Blood thinners
- Diabetes medications
- Thyroid medication
- Hormone therapy
- Testosterone therapy
- Psychiatric medication
- Weight-loss medication
- Supplements only
- No medications
- Prefer not to say

### Follow-up

**Do you prefer to start with labs, a provider, or lifestyle steps?**

Single-select:
- Labs first
- Provider first
- Lifestyle first
- I’m open to the best next step
- Lowest-cost option
- Fastest option

### Pattern use

This should shape recommendations without making medication-specific treatment claims.

---

## Step 8 — Existing Labs

### Question

**Have you had recent bloodwork or lab results?**

### Input type

Single-select.

### Options

- Yes, within the last 3 months
- Yes, within the last year
- Yes, but older than a year
- No
- Not sure

### Conditional follow-up

If yes:

**Which labs do you already have?**

Multi-select:
- CBC
- CMP
- Lipid panel
- A1C
- Fasting glucose
- TSH
- Free T4
- Ferritin / iron studies
- Vitamin D
- B12
- Testosterone
- Estradiol
- FSH / LH
- Cortisol
- CRP / inflammation marker
- I’m not sure

### Pattern use

- if recent labs exist, recommend interpretation / provider review
- if missing common labs for the selected pathway, suggest those labs
- if labs are old, suggest updated baseline

---

## Step 9 — Budget / Access Preferences

### Question

**What matters most when choosing a next step?**

### Input type

Single-select or multi-select.

### Options

- Lowest cost
- Fastest answer
- Most comprehensive
- Prefer telehealth
- Prefer in-person doctor
- Prefer labs first
- Prefer not to use insurance
- Want insurance-friendly options
- Not sure

### Pattern use

This helps route:
- PopularTests / DTC labs
- telehealth partner
- primary care suggestion
- specialist suggestion
- waitlist capture

---

## Step 10 — Readiness to Act

### Question

**How soon do you want to take action?**

### Input type

Single-select.

### Options

- Today
- This week
- This month
- Just researching
- Not sure

### Pattern use

This shapes CTA strength.

Examples:
- “Today” → show direct lab/provider CTAs
- “Just researching” → show email summary + educational guide
- “This week” → show “save my plan” and “compare options”

---

# Layer 2 — Pattern Engine

The pattern engine converts user responses into ranked health-navigation pathways.

It should be deterministic, transparent, and configurable.

The MVP should use simple weighted scoring rather than black-box AI.

## Core Principles

### 1. Score pathways, not diagnoses

Recommended pathways should be framed as areas to explore.

Good:
- “Energy & Fatigue”
- “Thyroid & Metabolic Signals”
- “Sleep & Recovery”
- “Hormone Changes”
- “Provider Review Recommended”

Avoid:
- “You have hypothyroidism”
- “You have sleep apnea”
- “You have perimenopause”

### 2. Separate clinical urgency from monetization

Safety routing should always override monetization.

### 3. Use confidence bands

Do not imply precision. Use simple qualitative labels.

Examples:
- Strong match
- Worth exploring
- Possible contributor
- Lower priority

### 4. Explain why

Each pathway should show:
- “Why this came up”
- selected user answers that contributed
- educational explanation
- recommended next steps

---

## Recommended Pathway Objects

Each pathway should have:

- pathway_id
- title
- plain_language_description
- score
- confidence_band
- supporting_signals
- missing_information
- recommended_labs
- recommended_provider_types
- educational_next_steps
- monetization_options
- safety_notes
- disqualifiers / suppressors

---

## Initial Pathways

### 1. Energy & Fatigue

pathway_id: `energy_fatigue`

Triggered by:
- low energy
- brain fog
- waking tired
- low mood
- poor sleep
- low exercise tolerance
- long duration

Possible lab categories:
- CBC
- CMP
- TSH
- Free T4
- Ferritin / iron studies
- Vitamin D
- B12
- A1C

Provider routing:
- primary care
- functional medicine / preventive health provider
- endocrinology if thyroid/metabolic signals are strong

Educational explanation:
Fatigue can be influenced by sleep, stress, nutrient status, thyroid function, metabolic health, medications, and mental health. Labs can help identify common contributors, but a clinician should evaluate persistent or worsening fatigue.

---

### 2. Thyroid Signals

pathway_id: `thyroid_signals`

Triggered by:
- fatigue
- feeling cold
- weight gain
- dry skin
- hair thinning
- known thyroid condition

Possible labs:
- TSH
- Free T4
- Free T3 optional
- thyroid antibodies optional

Provider routing:
- primary care
- endocrinology
- thyroid-focused telehealth if available

Educational explanation:
Thyroid hormones help regulate energy, temperature, metabolism, and other body functions. Symptoms alone cannot determine thyroid status, but labs are commonly used to evaluate thyroid function.

---

### 3. Metabolic Health / GLP-1 Readiness

pathway_id: `metabolic_glp1`

Triggered by:
- weight gain
- cravings
- hunger changes
- increased thirst
- frequent urination
- high blood pressure
- high cholesterol
- diabetes/prediabetes
- interest in GLP-1 options
- age 35+

Possible labs:
- A1C
- fasting glucose
- lipid panel
- CMP
- insulin optional
- kidney/liver markers via CMP

Provider routing:
- GLP-1 telehealth provider
- primary care
- endocrinology
- nutrition coaching

Educational explanation:
Metabolic health includes blood sugar, lipids, weight-related risk, liver/kidney markers, and cardiovascular risk factors. People exploring GLP-1 medication often benefit from baseline labs and provider review.

---

### 4. Hormone Changes / Menopause

pathway_id: `hormone_menopause`

Triggered by:
- female sex
- age 35–55
- hot flashes
- night sweats
- irregular periods
- mood changes
- sleep disruption
- weight changes
- low libido
- known perimenopause/menopause

Possible labs:
- TSH
- CBC
- CMP
- lipids
- A1C
- FSH / estradiol optional depending on provider guidance
- Vitamin D optional

Provider routing:
- menopause clinic
- OB-GYN
- primary care
- hormone-focused telehealth provider

Educational explanation:
Perimenopause and menopause can affect sleep, mood, weight, energy, and menstrual patterns. Labs may help rule out other contributors, but hormone levels can fluctuate and should be interpreted with clinical context.

---

### 5. Sleep & Recovery

pathway_id: `sleep_recovery`

Triggered by:
- poor sleep
- waking tired
- snoring
- morning headaches
- daytime sleepiness
- high stress
- weight gain
- low energy

Possible labs:
- not always lab-first
- consider fatigue baseline labs if persistent
- sleep evaluation may be more relevant than bloodwork

Provider routing:
- sleep medicine
- primary care
- sleep study provider
- behavioral sleep program

Educational explanation:
Sleep problems can cause fatigue, mood changes, cravings, weight changes, and brain fog. If snoring or waking unrefreshed is present, a sleep evaluation may be a strong next step.

---

### 6. Stress, Mood & Burnout

pathway_id: `stress_mood`

Triggered by:
- anxiety
- low mood
- high stress
- poor sleep
- fatigue
- burnout
- appetite changes
- low motivation

Possible labs:
- CBC
- TSH
- Vitamin D
- B12
- ferritin if fatigue present
- A1C if metabolic symptoms present

Provider routing:
- mental health provider
- primary care
- therapy platform
- stress/recovery coaching

Educational explanation:
Stress and mood can affect sleep, energy, appetite, and physical symptoms. It can also overlap with thyroid, nutrient, sleep, and metabolic factors. Persistent mood symptoms should be discussed with a professional.

Safety:
If self-harm selected, stop normal flow and show crisis path.

---

### 7. Men’s Hormone / Testosterone Signals

pathway_id: `mens_testosterone`

Triggered by:
- male sex
- fatigue
- low libido
- muscle loss
- mood changes
- weight gain
- low motivation
- interest in testosterone

Possible labs:
- total testosterone
- free testosterone
- SHBG optional
- CBC
- CMP
- lipids
- A1C
- TSH

Provider routing:
- men’s health clinic
- primary care
- endocrinology
- testosterone telehealth provider

Educational explanation:
Low testosterone symptoms can overlap with sleep, stress, thyroid, metabolic health, medications, and mood. Lab testing and clinician review are important before considering treatment.

---

### 8. Lab Interpretation / Biomarker Review

pathway_id: `lab_interpretation`

Triggered by:
- user has recent labs
- user selects “understand my lab results”
- user selects “know what labs mean”

Possible next steps:
- upload or enter labs in a future version
- explain common lab categories
- recommend clinician review
- identify missing baseline labs

Provider routing:
- primary care
- preventive health provider
- relevant specialist depending on abnormal categories

Monetization:
- premium lab interpretation report later
- provider referral
- follow-up testing panel

---

### 9. Preventive Baseline / Longevity

pathway_id: `preventive_baseline`

Triggered by:
- user wants prevention
- user wants baseline labs
- just researching
- no acute symptoms
- interest in longevity / optimization

Possible labs:
- CBC
- CMP
- lipid panel
- A1C
- TSH
- Vitamin D
- B12
- hs-CRP optional
- ApoB optional
- Lp(a) optional

Provider routing:
- preventive health provider
- primary care
- longevity clinic if appropriate

Educational explanation:
Baseline labs can help users understand general metabolic, organ-function, nutrient, and cardiovascular markers. More advanced biomarkers may be useful depending on goals and clinician guidance.

---

## Scoring Model

Each answer option should contribute weighted points to pathways.

Example scoring structure:

- primary goal adds 3 points to matching pathway
- symptom adds 1–3 points depending on specificity
- known condition adds 2–4 points
- demographic context adds 1–3 points
- action preference does not necessarily add clinical score but shapes CTA ordering
- red flags override scoring

### Confidence bands

After scoring, convert raw scores into bands:

- 8+ = Strong match
- 5–7 = Worth exploring
- 3–4 = Possible contributor
- 0–2 = Lower priority / suppress unless needed

The exact thresholds should be configurable.

### Tie handling

If multiple pathways tie:
1. rank by primary goal
2. rank by symptom specificity
3. rank by urgency/readiness
4. rank by monetizable next step only after safety and relevance

### Result count

Show no more than 3 primary pathways in the first results screen.

Secondary pathways can appear lower as “Other areas that may be worth exploring.”

---

# Layer 3 — Recommendations

Recommendations should convert pathway scores into a clear, useful plan.

The final result is the user’s **BodyPath**.

## Result Page Structure

### 1. Summary Header

Title:

**Your BodyPath**

Subtitle example:

> Based on your answers, these are the health areas that may be most worth exploring next.

Include disclaimer:

> This is educational guidance, not a diagnosis.

---

### 2. Top Pathways

Show the top 1–3 pathways.

Each pathway should include:

- pathway title
- confidence band
- short explanation
- “Why this came up”
- suggested next steps
- relevant labs
- provider/care options

Example:

#### Energy & Fatigue — Strong match

Your answers suggest that energy and fatigue are important areas to explore. Fatigue can be connected to sleep quality, stress, thyroid function, nutrient levels, metabolic health, and medications.

**Why this came up**
- You selected low energy
- You selected brain fog
- You said this has been going on for 3–12 months
- You want to know what labs to ask for

**Common labs to discuss**
- CBC
- CMP
- TSH
- Ferritin / iron studies
- Vitamin D
- B12
- A1C

**Care options to consider**
- Primary care review
- Lab testing first
- Preventive health provider

---

### 3. Recommended Next Step

Show one primary recommendation.

Examples:

#### Labs-first recommendation

**Recommended next step: Start with a baseline fatigue panel**

Because your answers point to fatigue, brain fog, and persistent symptoms, a basic lab panel may help identify common contributors worth discussing with a provider.

CTA:
**View recommended labs**

Secondary CTA:
**Send me my BodyPath**

#### Provider-first recommendation

**Recommended next step: Talk to a licensed provider**

Because you selected persistent symptoms and medication or pregnancy-related context, a provider review may be the safest first step.

CTA:
**Find care options**

Secondary CTA:
**Send me my BodyPath**

#### Sleep-first recommendation

**Recommended next step: Explore sleep evaluation**

Because snoring and waking up tired can be signs that sleep quality is affecting energy, a sleep-focused evaluation may be more useful than labs alone.

CTA:
**Explore sleep care options**

Secondary CTA:
**Send me my BodyPath**

---

### 4. Lab Recommendations

Lab recommendations should be grouped into clear categories.

Example categories:

#### Foundation Labs

Commonly used to evaluate broad health context:
- CBC
- CMP
- Lipid panel
- A1C

#### Pathway-Specific Labs

Based on selected symptoms:
- TSH / Free T4 for thyroid signals
- Ferritin / iron studies for fatigue
- Vitamin D / B12 for nutrient status
- Testosterone panel for men’s health
- FSH / estradiol only with careful menopause caveat

#### Advanced / Optional Labs

Only show when relevant:
- ApoB
- Lp(a)
- hs-CRP
- fasting insulin
- cortisol

### Lab copy guardrail

Use language like:
- “common labs to discuss”
- “may be worth exploring”
- “often used to evaluate”
- “consider asking a licensed provider”

Avoid:
- “you need”
- “required”
- “this will diagnose”
- “this proves”

---

### 5. Provider Routing Recommendations

Provider routing should explain provider type, not necessarily named partners at first.

Provider categories:

- Primary care
- OB-GYN
- Menopause clinic
- GLP-1 telehealth provider
- Endocrinologist
- Sleep medicine provider
- Mental health provider
- Nutrition coach
- Men’s health clinic
- Preventive health / longevity provider

Each provider recommendation should include:

- provider type
- why this type may fit
- when to consider it
- monetization option

Example:

#### Menopause clinic

May fit if:
- age 35–55
- hot flashes or night sweats
- irregular periods
- sleep disruption
- mood changes

CTA:
**Explore menopause care options**

---

### 6. Education Cards

Each result should include short educational cards.

Examples:
- Why fatigue is hard to pin down
- Why labs can help, but do not tell the whole story
- What a primary care provider may evaluate
- When to consider telehealth
- What to track before your appointment

These should support SEO/AEO reuse later.

---

### 7. Email Capture / Save My Plan

After showing meaningful results, ask:

**Want a copy of your BodyPath?**

Inputs:
- email
- optional consent checkbox

CTA:
**Send My BodyPath**

Email capture should not be required to see results in MVP. Requiring email before results may reduce trust.

---

### 8. Feedback Loop

Ask one simple question:

**Was this useful?**

Options:
- Yes
- Somewhat
- Not really

Optional:
**What were you hoping to understand?**

This will help improve the rules.

---

# Layer 4 — Monetization

Monetization should be integrated carefully and transparently.

The first version should monetize through labs and referrals without compromising trust.

## Monetization Priority

1. Lab recommendations / PopularTests integration
2. Provider referral waitlists
3. Partner provider routing
4. Email list / retargeting audience
5. Premium lab interpretation later
6. Subscription later

---

## Monetization Path 1 — Labs

### When to show

Show lab CTAs when:
- user selected labs-first
- pathway strongly supports testing
- user has no recent labs
- user is researching common lab work
- user wants a preventive baseline
- user selected fatigue, metabolic, hormones, testosterone, or lab interpretation

### CTA examples

- **View recommended labs**
- **See common tests for fatigue**
- **Explore a baseline health panel**
- **Check metabolic health labs**
- **See hormone-related labs**

### Destination

For MVP:
- route to relevant PopularTests pages
- route to a waitlist page if no product exists
- route to curated lab guide pages

### Trust disclosure

If monetized:

> BodyPath may earn revenue if you purchase testing or connect with a partner. Recommendations should still be reviewed with a licensed clinician.

---

## Monetization Path 2 — Provider Referrals

### When to show

Show provider routing when:
- user selects provider-first
- user has persistent/worsening symptoms
- pathway suggests specialist review
- user selects GLP-1, menopause, sleep, testosterone, or mental health
- user has medication/pregnancy/complex context
- labs already exist and interpretation/action is needed

### Provider categories and example monetization

#### GLP-1 telehealth

Potential monetization:
- CPA
- rev-share
- affiliate
- lead fee

Trigger:
- weight/metabolic goal
- GLP-1 interest
- metabolic risk signals

#### Menopause clinic

Potential monetization:
- provider referral fee
- appointment lead
- partner intake redirect

Trigger:
- age 35–55
- menopause symptoms
- hormone goal

#### Sleep program

Potential monetization:
- sleep study referral
- sleep telehealth
- coaching

Trigger:
- snoring
- waking tired
- daytime sleepiness

#### Mental health provider

Potential monetization:
- therapy platform referral
- coaching referral

Trigger:
- stress/mood pathway without self-harm crisis

#### Testosterone clinic

Potential monetization:
- men’s health referral
- lab + provider pathway

Trigger:
- male sex
- low libido
- fatigue
- muscle loss
- testosterone goal

---

## Monetization Path 3 — Email / Retargeting

Even if the user does not purchase or request a provider, email capture is valuable.

Lead magnets:
- “Send me my BodyPath”
- “Send me the fatigue lab checklist”
- “Send me the GLP-1 readiness checklist”
- “Send me the menopause symptom tracker”
- “Send me the lab interpretation guide”

Email segmentation should include:
- primary goal
- top pathway
- recommended next step
- readiness to act
- lab interest
- provider interest

---

## Monetization Path 4 — Premium Report Later

Not MVP, but design for it.

Future paid product:
- upload labs
- AI-assisted interpretation
- pathway summary
- questions to ask provider
- tracking dashboard
- PDF report

Potential price:
- $19–$49 one-time
- or included in subscription

---

## Monetization Path 5 — Subscription Later

Future recurring product:
- symptom tracking
- lab tracking
- retesting reminders
- provider visit prep
- biomarker education
- personal health timeline

Potential positioning:

**Your ongoing BodyPath: track symptoms, labs, and next steps over time.**

---

# Final Results Logic

The final results should feel like a personalized plan, not a generic article.

## Result Output Object

Each completed intake should generate a structured object:

- user_goal
- selected_symptoms
- red_flag_status
- top_pathways
- primary_next_step
- lab_recommendations
- provider_recommendations
- education_cards
- monetization_ctas
- email_capture_offer
- safety_disclaimer

## Example Result

### User profile

- Goal: Low energy or fatigue
- Symptoms: low energy, brain fog, poor sleep, weight gain
- Duration: 3–12 months
- Age: 45–54
- Sex: female
- Preference: labs first
- Readiness: this week

### Top pathways

1. Energy & Fatigue — Strong match
2. Hormone Changes / Menopause — Worth exploring
3. Sleep & Recovery — Worth exploring

### Primary next step

**Start with a baseline fatigue and hormone-context lab review.**

### Labs

Foundation:
- CBC
- CMP
- Lipid panel
- A1C

Fatigue:
- TSH
- Free T4
- Ferritin
- Vitamin D
- B12

Hormone context:
- discuss menopause-related evaluation with clinician

### Provider routing

- Primary care
- Menopause-focused provider
- Sleep evaluation if snoring/waking tired persists

### Monetization CTAs

Primary:
**View recommended fatigue labs**

Secondary:
**Explore menopause care options**

Email:
**Send me my BodyPath**

---

# Architecture Requirements

## 1. Configuration-Driven Questions

Questions should be config-driven rather than hardcoded into UI logic.

Each question should define:
- question_id
- prompt
- helper_text
- type
- options
- conditional display rules
- validation
- scoring effects
- safety effects
- result-personalization effects

## 2. Configuration-Driven Pathways

Pathways should be defined in structured configuration.

Each pathway should define:
- title
- description
- score thresholds
- scoring signals
- recommended labs
- provider categories
- educational copy
- monetization CTAs
- suppressors
- safety caveats

## 3. Separation Between Scoring and Copy

Do not bury scoring logic inside display copy.

Keep separate:
- answer collection
- score calculation
- pathway ranking
- recommendation generation
- UI rendering

## 4. No Open-Ended Medical Advice in MVP

If open-ended text is included, use it only for:
- optional “anything else?” notes
- future analysis
- personalization tone

Do not use it to generate unsafe recommendations in the first version.

## 5. Deterministic Outputs

Given the same answers, the same result should appear.

This is important for:
- debugging
- medical safety review
- conversion optimization
- future compliance

## 6. Analytics Events

Track the funnel carefully.

Recommended events:
- widget_opened
- intake_started
- step_completed
- red_flag_triggered
- intake_completed
- result_viewed
- pathway_shown
- lab_cta_clicked
- provider_cta_clicked
- email_submitted
- result_feedback_submitted

Event properties:
- primary_goal
- top_pathway
- confidence_band
- readiness
- preferred_next_step
- has_recent_labs
- user_age_range
- user_sex
- monetization_cta_type

Avoid sending sensitive free-text health data to analytics tools in MVP.

---

# Initial MVP Scope

Build the first version around these core pathways:

1. Energy & Fatigue
2. Metabolic Health / GLP-1 Readiness
3. Hormone Changes / Menopause
4. Sleep & Recovery
5. Lab Interpretation / Preventive Baseline

Defer until version 2:
- testosterone-specific flow
- mental-health-specific flow beyond safety/basic routing
- lab upload
- account creation
- provider marketplace
- paid report
- subscription

---

# Recommended First Launch Funnel

## Homepage CTA

**Start Your BodyPath**

## Widget Flow

1. Welcome / disclaimer
2. Primary goal
3. Symptoms
4. Duration/change pattern
5. Basic context
6. Health goals
7. Known health context
8. Existing labs
9. Preferences
10. Readiness
11. Results

## Result

Show:
- top 3 pathways
- primary next step
- recommended labs
- provider categories
- education cards
- monetized CTA
- email capture
- feedback

---

# Suggested Copy Library

## CTA copy

- Start Your BodyPath
- Get Your Personalized BodyPath
- View Recommended Labs
- Explore Care Options
- Send My BodyPath
- See My Next Steps

## Disclaimer copy

> BodyPath provides educational health-navigation information. It is not a diagnosis, treatment plan, or substitute for a licensed medical professional.

## Results intro

> Your answers point to a few areas that may be worth exploring. Here is a personalized BodyPath to help you decide what to do next.

## Lab recommendation copy

> These are common labs people discuss with a clinician when exploring this pathway.

## Provider routing copy

> Based on your answers, this type of provider may be a good fit to discuss next steps.

## Monetization disclosure

> BodyPath may earn revenue when users purchase testing or connect with partner services. We aim to keep recommendations clear, relevant, and educational.

---

# Product Strategy Notes

## Why this can work

Consumers increasingly arrive with:
- symptoms
- AI-generated curiosity
- lab questions
- provider confusion
- fragmented telehealth options
- uncertainty about what to do next

BodyPath should own the moment between:

**“Something feels off”**

and

**“Here’s my next best step.”**

## The first monetizable wedge

The strongest MVP wedge is:

**What labs should I get?**

This ties directly to:
- PopularTests
- fatigue
- GLP-1
- menopause
- metabolic health
- lab interpretation
- provider routing

## The long-term business

BodyPath can evolve into:
- AI-assisted intake
- lab interpretation
- provider matching
- longitudinal symptom/lab tracking
- referral marketplace
- subscription health-navigation product

But the MVP should remain simple:

**structured intake → ranked pathways → labs/provider next steps → monetized routing.**
