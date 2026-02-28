// Template data organized by channel > scenario > tone
// Placeholders: {businessName}, {customerName}, {service}, {reviewLink}, {staffName}

export const SCENARIOS = [
  { id: 'just-completed', label: 'Just Completed Service', icon: 'check' },
  { id: 'happy-followup', label: 'Happy Customer Follow-Up', icon: 'smile' },
  { id: 'long-time', label: 'Long-Time Customer', icon: 'clock' },
  { id: 'resolved-complaint', label: 'After Resolving a Complaint', icon: 'shield' },
  { id: 'seasonal', label: 'Seasonal Check-In / Thank You', icon: 'calendar' },
  { id: 'post-event', label: 'Post-Event', icon: 'star' },
]

export const TONES = [
  { id: 'casual', label: 'Casual' },
  { id: 'professional', label: 'Professional' },
  { id: 'grateful', label: 'Grateful' },
]

export const CHANNELS = [
  { id: 'email', label: 'Email' },
  { id: 'sms', label: 'SMS / Text' },
  { id: 'in-person', label: 'In-Person Script' },
  { id: 'print', label: 'Printable Card' },
]

export const INDUSTRIES = [
  'Restaurant',
  'Salon / Barbershop',
  'Dentist',
  'Doctor / Medical',
  'Plumber',
  'Electrician',
  'HVAC',
  'Auto Repair',
  'Real Estate',
  'Law Firm',
  'Accounting / Tax',
  'Fitness / Gym',
  'Pet Care / Vet',
  'Landscaping',
  'Cleaning Service',
  'Photography',
  'Wedding / Event Venue',
  'Retail Store',
  'Other',
]

export const CHANNEL_TIPS = {
  email: 'Send within 24 hours of service. Emails with the customer\'s name get 26% higher open rates.',
  sms: 'Keep under 160 characters. SMS review requests have 3x higher response rates than email.',
  'in-person': 'Ask when the customer expresses satisfaction. "While it\'s fresh in your mind" is a natural transition.',
  print: 'Place cards at checkout, in bags, or on tables. QR codes convert 2x better than URLs.',
}

// ------- EMAIL TEMPLATES -------
const emailTemplates = {
  'just-completed': {
    casual: [
      {
        subject: 'How\'d we do, {customerName}?',
        body: `Hey {customerName},

Thanks for stopping by {businessName}! We had a great time helping you with your {service}.

If you have a sec, we'd love to hear how it went. A quick Google review would totally make our day:

{reviewLink}

No pressure at all — but it really does help us out. Thanks again!

Cheers,
The {businessName} Crew`,
      },
      {
        subject: 'Quick question from {businessName}',
        body: `Hi {customerName},

Hope you're enjoying the results of your {service}! We always love hearing what our customers think.

Got a minute? Drop us a Google review:

{reviewLink}

Even a sentence or two helps other people find us. Appreciate you!

— {businessName}`,
      },
      {
        subject: 'We hope you loved it!',
        body: `Hey {customerName}!

Just wanted to say thanks for choosing {businessName} for your {service}. We hope everything was awesome.

If you'd like to share your experience, here's where you can leave a quick review:

{reviewLink}

It takes less than a minute and means a lot to our small team. Thanks!

— The {businessName} Team`,
      },
    ],
    professional: [
      {
        subject: 'How was your experience with {businessName}?',
        body: `Hi {customerName},

Thank you for choosing {businessName} for your recent {service}. We hope everything exceeded your expectations.

If you have a moment, we'd truly appreciate a brief Google review. It helps other customers find us and helps us continue improving.

Leave a review here: {reviewLink}

It only takes a minute and means the world to our team.

Thank you,
The {businessName} Team`,
      },
      {
        subject: 'Your feedback matters to us',
        body: `Dear {customerName},

We appreciate you trusting {businessName} with your {service}. Your satisfaction is our top priority, and we'd value your honest feedback.

Would you take a moment to share your experience on Google?

{reviewLink}

Your review helps us maintain the high standards our customers deserve.

Best regards,
The {businessName} Team`,
      },
      {
        subject: 'A moment of your time, {customerName}?',
        body: `Hello {customerName},

Thank you for your recent visit to {businessName}. We strive to provide exceptional {service}, and your opinion matters greatly to us.

If your experience was positive, we'd be grateful if you could share it in a Google review:

{reviewLink}

Your feedback helps us grow and serve our community better.

Sincerely,
The {businessName} Team`,
      },
    ],
    grateful: [
      {
        subject: 'Thank you, {customerName} — you made our day',
        body: `Dear {customerName},

We just wanted to take a moment to sincerely thank you for choosing {businessName} for your {service}. It truly means the world to us.

As a small business, every customer matters deeply. If you felt we delivered great service, sharing your experience would help us tremendously:

{reviewLink}

We're so grateful for your support. Thank you for being part of our story.

With gratitude,
The {businessName} Family`,
      },
      {
        subject: 'Your support means everything to us',
        body: `Hi {customerName},

From the bottom of our hearts, thank you for trusting {businessName} with your {service}. Serving you is truly a privilege.

If you have a moment, a Google review would be an incredible gift to our team:

{reviewLink}

Every review helps us reach more people who need our services. We can't thank you enough.

Warmly,
The {businessName} Team`,
      },
      {
        subject: 'We\'re grateful for you, {customerName}',
        body: `Dear {customerName},

Thank you so much for your recent visit to {businessName}. We hope your {service} experience was everything you needed.

Your feedback is one of the most valuable things you can give a small business. If you'd be willing to share a few words:

{reviewLink}

We appreciate you more than words can say. Thank you!

With heartfelt thanks,
The {businessName} Team`,
      },
    ],
  },
  'happy-followup': {
    casual: [
      {
        subject: 'So glad you had a great experience!',
        body: `Hey {customerName},

It was awesome hearing that you enjoyed your {service} at {businessName}! That kind of feedback keeps us going.

Since you had such a great experience, would you mind sharing it on Google? It helps other people find us:

{reviewLink}

Thanks a bunch — you're the best!

— {businessName}`,
      },
      {
        subject: 'Your kind words made our week!',
        body: `Hi {customerName}!

We were so thrilled to hear you loved your {service}! Our team was all smiles when we heard your feedback.

Would you mind putting those kind words on Google too? It really helps:

{reviewLink}

No worries if you can't — just knowing you're happy is enough. Thanks!

— The {businessName} Crew`,
      },
    ],
    professional: [
      {
        subject: 'Thank you for your positive feedback',
        body: `Hello {customerName},

We're delighted to hear that your experience with {businessName} met your expectations. Positive feedback like yours motivates our entire team.

If you'd be willing to share your experience publicly, a Google review would be greatly valued:

{reviewLink}

It helps other potential customers make informed decisions about our {service}.

Thank you for your kind words,
The {businessName} Team`,
      },
      {
        subject: 'We\'re glad we could deliver for you',
        body: `Dear {customerName},

It was wonderful to learn that you were satisfied with your recent {service} at {businessName}. We take pride in every interaction.

Your endorsement on Google would mean a great deal to our team:

{reviewLink}

We look forward to serving you again in the future.

Best regards,
{businessName}`,
      },
    ],
    grateful: [
      {
        subject: 'Your happiness is our greatest reward',
        body: `Dear {customerName},

Hearing that you had a wonderful experience at {businessName} absolutely made our day. It's customers like you who remind us why we love what we do.

If you have a moment, sharing your experience on Google would be an incredible way to support our small business:

{reviewLink}

We're so thankful for your kind words and your trust in us.

With deep appreciation,
The {businessName} Family`,
      },
      {
        subject: 'You truly brightened our day',
        body: `Hi {customerName},

We can't tell you how much your positive feedback about your {service} means to us. Every kind word fuels our passion.

Would you consider sharing that experience on Google? It would help us so much:

{reviewLink}

Thank you for being such a wonderful customer. We are endlessly grateful.

Warmly,
{businessName}`,
      },
    ],
  },
  'long-time': {
    casual: [
      {
        subject: 'You\'ve been with us for a while now!',
        body: `Hey {customerName},

Just wanted to say — we really appreciate you being a loyal {businessName} customer. You've been coming to us for a while now, and that means a lot.

We realized we've never asked you to leave us a Google review. Would you mind sharing your experience?

{reviewLink}

Your perspective as a long-time customer is especially valuable. Thanks for sticking with us!

— {businessName}`,
      },
      {
        subject: 'Can we ask a small favor?',
        body: `Hi {customerName}!

You've been a {businessName} regular for a while now, and honestly, we couldn't do it without customers like you.

Here's a quick favor that would mean the world: a Google review sharing what keeps you coming back.

{reviewLink}

Even a couple sentences would be amazing. Thanks for being awesome!

— The {businessName} Team`,
      },
    ],
    professional: [
      {
        subject: 'A request from your team at {businessName}',
        body: `Dear {customerName},

As one of our valued long-term customers, your opinion carries significant weight. We're grateful for your continued trust in {businessName}.

We would be honored if you'd share your experience in a Google review. Your perspective as a loyal customer provides tremendous insight for others:

{reviewLink}

Thank you for your years of partnership. We look forward to many more.

With appreciation,
The {businessName} Team`,
      },
      {
        subject: 'Your loyalty deserves recognition',
        body: `Hello {customerName},

We've had the privilege of serving you for quite some time now, and we want you to know how much we value your continued patronage.

As a trusted, long-term customer, we'd especially appreciate hearing your thoughts in a Google review:

{reviewLink}

Your experience and perspective would be invaluable to potential customers considering our services.

Respectfully,
{businessName}`,
      },
    ],
    grateful: [
      {
        subject: 'Thank you for your loyalty, {customerName}',
        body: `Dear {customerName},

We've been reflecting on the customers who have been by our side through the years, and your name was one of the first that came to mind. Your loyalty to {businessName} is something we never take for granted.

If you've ever thought about leaving us a Google review, now would be a wonderful time:

{reviewLink}

Your long-term perspective would be incredibly meaningful — both to us and to others discovering {businessName} for the first time.

With heartfelt gratitude,
The {businessName} Family`,
      },
      {
        subject: 'You\'ve been part of our journey',
        body: `Dear {customerName},

Every successful business is built on the backs of loyal customers, and you are one of the people who have made {businessName} what it is today. We are so grateful.

It would mean the world if you'd share your experience in a Google review:

{reviewLink}

Thank you for being part of our story. We cherish your support.

Always grateful,
The {businessName} Team`,
      },
    ],
  },
  'resolved-complaint': {
    casual: [
      {
        subject: 'We hope we made things right',
        body: `Hi {customerName},

We know your recent experience with {businessName} didn't go as smoothly as planned, and we truly appreciate your patience while we worked to fix it.

We hope the resolution met your expectations. If you feel we handled the situation well, we'd really appreciate you sharing that on Google:

{reviewLink}

Either way, thank you for giving us the chance to make things right. That means a lot.

— {businessName}`,
      },
      {
        subject: 'Following up — are things good now?',
        body: `Hey {customerName},

Just checking in after your recent {service} situation. We hope we were able to sort everything out for you.

If you feel good about how we handled things, a Google review mentioning that would really help:

{reviewLink}

We appreciate your understanding and giving us the chance to fix things. Thanks!

— The {businessName} Team`,
      },
    ],
    professional: [
      {
        subject: 'Following up on your recent experience',
        body: `Dear {customerName},

We want to thank you for bringing your concerns to our attention regarding your {service}. Addressing customer feedback is fundamental to our continuous improvement at {businessName}.

We sincerely hope that the resolution we provided met your expectations. If you felt our response was thorough and fair, we'd be grateful if you'd share that experience:

{reviewLink}

Your willingness to give us the opportunity to improve is something we don't take lightly.

Respectfully,
The {businessName} Team`,
      },
      {
        subject: 'Your feedback has helped us improve',
        body: `Hello {customerName},

Thank you for your recent feedback regarding your experience at {businessName}. We took your concerns seriously and have implemented changes as a result.

If you feel the matter was resolved to your satisfaction, a review reflecting your complete experience would be appreciated:

{reviewLink}

We value your candid feedback and are committed to earning your confidence.

Best regards,
{businessName}`,
      },
    ],
    grateful: [
      {
        subject: 'Thank you for your patience and understanding',
        body: `Dear {customerName},

We cannot thank you enough for your patience and grace during your recent experience with {businessName}. When things didn't go as planned with your {service}, your willingness to let us make it right meant everything.

If you feel we resolved things well, sharing that story could help others see what {businessName} stands for:

{reviewLink}

We are deeply grateful for customers like you who believe in second chances. Thank you from the bottom of our hearts.

With sincere gratitude,
The {businessName} Family`,
      },
      {
        subject: 'You gave us a chance — and we\'re so thankful',
        body: `Dear {customerName},

Not every customer gives a business the chance to make things right, and we are so grateful you did. Your patience with {businessName} during the resolution of your {service} concern showed real generosity.

If our response impressed you, a Google review sharing your complete experience would be incredibly meaningful:

{reviewLink}

Thank you for helping us become better. We are forever grateful.

Warmly,
{businessName}`,
      },
    ],
  },
  seasonal: {
    casual: [
      {
        subject: 'Happy holidays from {businessName}!',
        body: `Hey {customerName}!

As the season winds down, we wanted to take a moment to thank you for being a {businessName} customer this year. It's been a great ride!

If you've enjoyed your experiences with us, we'd love a quick Google review to kick off the new season:

{reviewLink}

Wishing you all the best — and we'll see you again soon!

Cheers,
The {businessName} Team`,
      },
      {
        subject: 'End of year shoutout to our amazing customers',
        body: `Hi {customerName},

As we wrap up another year, we wanted to give a big shoutout to customers like you who make {businessName} possible.

Got a sec? Help us start the new year strong with a Google review:

{reviewLink}

Here's to a great year ahead! Thanks for being awesome.

— {businessName}`,
      },
    ],
    professional: [
      {
        subject: 'Season\'s greetings from {businessName}',
        body: `Dear {customerName},

As we approach the end of another year, we want to express our sincere gratitude for your patronage of {businessName}. Your trust in our {service} has been invaluable.

As you reflect on the year, we would be honored if you'd share your experience in a Google review:

{reviewLink}

We wish you a wonderful season and look forward to serving you in the year ahead.

Warm regards,
The {businessName} Team`,
      },
      {
        subject: 'A year in review — thank you',
        body: `Hello {customerName},

As we reflect on the past year, we're reminded of how fortunate we are to serve customers like you. Thank you for choosing {businessName}.

If you've had positive experiences with us this year, we'd appreciate your feedback on Google:

{reviewLink}

Here's to continued success together in the coming year.

Best wishes,
{businessName}`,
      },
    ],
    grateful: [
      {
        subject: 'From our family to yours — thank you',
        body: `Dear {customerName},

As this season of gratitude arrives, you are at the top of our thank-you list. {businessName} wouldn't be where it is today without customers like you.

If you have a quiet moment during the holidays, we'd be deeply touched by a Google review:

{reviewLink}

We wish you and your loved ones a wonderful season filled with joy. Thank you for being part of our {businessName} family.

With heartfelt warmth,
The {businessName} Family`,
      },
      {
        subject: 'Grateful for you this season',
        body: `Dear {customerName},

This time of year always reminds us of how blessed we are to serve our community. And you, {customerName}, are someone we're especially grateful for.

If you'd like to give us a gift this season, a Google review would mean the world:

{reviewLink}

Thank you for your support, your trust, and your loyalty. We wish you a beautiful season ahead.

With all our gratitude,
{businessName}`,
      },
    ],
  },
  'post-event': {
    casual: [
      {
        subject: 'Hope your event was amazing!',
        body: `Hey {customerName}!

We hope your {service} at {businessName} was everything you dreamed of! It was such a blast being part of your special day.

If you had a great time, we'd love for you to share the experience on Google:

{reviewLink}

Congrats again — and thanks for letting us be part of the celebration!

— The {businessName} Crew`,
      },
      {
        subject: 'That was one for the books!',
        body: `Hi {customerName},

What an incredible {service}! We loved being part of your event at {businessName}. Hope you're still riding the high!

If you get a chance, a Google review would really help other people planning their own events:

{reviewLink}

Thanks for choosing us — it was truly our pleasure!

— {businessName}`,
      },
    ],
    professional: [
      {
        subject: 'Thank you for hosting with {businessName}',
        body: `Dear {customerName},

It was our privilege to be part of your recent {service}. We hope everything met your vision and expectations.

Your feedback would be invaluable to future clients planning similar events. If you have a moment, we'd appreciate a Google review:

{reviewLink}

We wish you all the best and hope to work with you again in the future.

Regards,
The {businessName} Team`,
      },
      {
        subject: 'Your event — our pleasure',
        body: `Hello {customerName},

Thank you for trusting {businessName} with your {service}. We take great pride in helping create memorable experiences.

Your perspective on our event services would be tremendously helpful to others. Would you consider sharing it on Google?

{reviewLink}

We look forward to the opportunity to serve you again.

Best regards,
{businessName}`,
      },
    ],
    grateful: [
      {
        subject: 'Thank you for sharing your special day with us',
        body: `Dear {customerName},

Being part of your {service} was truly one of our highlights. Moments like these are why we do what we do at {businessName}.

If your experience was as meaningful to you as it was to us, we'd be so grateful for a Google review:

{reviewLink}

Thank you for trusting us with something so special. We are honored and deeply grateful.

With warm regards,
The {businessName} Family`,
      },
      {
        subject: 'We\'re still smiling from your event',
        body: `Dear {customerName},

Days later, we're still thinking about what a wonderful {service} that was. Thank you for letting {businessName} be part of such a special occasion.

If you'd share your experience on Google, it would mean the absolute world to our team:

{reviewLink}

Congratulations again — and from the bottom of our hearts, thank you.

With gratitude,
{businessName}`,
      },
    ],
  },
}

// ------- SMS TEMPLATES -------
const smsTemplates = {
  'just-completed': {
    casual: [
      'Hey {customerName}! Thanks for visiting {businessName}. Loved helping with your {service}! Got a sec for a quick review? {reviewLink}',
      'Thanks for choosing {businessName}! Hope you loved your {service}. A quick review would mean a lot: {reviewLink}',
      '{customerName}, thanks for coming in! If you enjoyed your {service} at {businessName}, we\'d love a review: {reviewLink}',
    ],
    professional: [
      'Thank you for visiting {businessName}. We hope you enjoyed your {service}. We\'d appreciate your feedback: {reviewLink}',
      '{customerName}, thank you for choosing {businessName} for your {service}. Your review would be valued: {reviewLink}',
      'Thank you for your recent visit to {businessName}. Share your {service} experience here: {reviewLink}',
    ],
    grateful: [
      '{customerName}, thank you SO much for choosing {businessName}. Your {service} experience means everything to us. Share it here? {reviewLink}',
      'We\'re so grateful you chose {businessName} for your {service}! A review would make our day: {reviewLink}',
      'Thank you, {customerName}! Your support of {businessName} means the world. Share your experience: {reviewLink}',
    ],
  },
  'happy-followup': {
    casual: [
      'So glad you loved your {service} at {businessName}! Mind sharing the love on Google? {reviewLink}',
      '{customerName}, thrilled you had a great time! Quick review? {reviewLink} Thanks!',
    ],
    professional: [
      'Thank you for your positive feedback about {businessName}. Would you share it on Google? {reviewLink}',
      '{customerName}, we\'re pleased you enjoyed your experience. A Google review would be appreciated: {reviewLink}',
    ],
    grateful: [
      '{customerName}, your kind words about {businessName} made our entire week! Would you share on Google? {reviewLink}',
      'We\'re so touched by your feedback! Sharing on Google would mean everything: {reviewLink}',
    ],
  },
  'long-time': {
    casual: [
      '{customerName}, you\'ve been coming to {businessName} for ages! Ever left us a Google review? {reviewLink}',
      'Hey {customerName}! As a longtime {businessName} customer, your review would mean so much: {reviewLink}',
    ],
    professional: [
      '{customerName}, as a valued long-term customer, your perspective on {businessName} would be invaluable: {reviewLink}',
      'Thank you for your continued loyalty to {businessName}. We\'d be honored by your review: {reviewLink}',
    ],
    grateful: [
      '{customerName}, your loyalty to {businessName} over the years means everything. Would you share your experience? {reviewLink}',
      'We\'re so grateful for your years of trust in {businessName}. A review would mean the world: {reviewLink}',
    ],
  },
  'resolved-complaint': {
    casual: [
      'Hi {customerName}, hope we got things sorted for you at {businessName}! If so, a quick review helps: {reviewLink}',
      '{customerName}, glad we could make things right! If you\'re happy now, share it here: {reviewLink}',
    ],
    professional: [
      '{customerName}, we hope we resolved your concern satisfactorily. Your feedback would be valued: {reviewLink}',
      'Thank you for your patience, {customerName}. If we met your expectations, a review is appreciated: {reviewLink}',
    ],
    grateful: [
      '{customerName}, thank you for giving {businessName} the chance to make it right. If we did, we\'d love your review: {reviewLink}',
      'We\'re so grateful you let us fix things. Your complete experience matters: {reviewLink}',
    ],
  },
  seasonal: {
    casual: [
      'Happy holidays from {businessName}! Thanks for being an awesome customer this year. Quick review? {reviewLink}',
      '{customerName}, as the year wraps up, thanks for choosing {businessName}! Drop us a review: {reviewLink}',
    ],
    professional: [
      'Season\'s greetings from {businessName}. As the year closes, we\'d value your feedback: {reviewLink}',
      '{customerName}, thank you for your patronage this year. Share your experience: {reviewLink}',
    ],
    grateful: [
      'This season, we\'re grateful for customers like you, {customerName}. A review would be the best gift: {reviewLink}',
      '{customerName}, you\'re at the top of our thank-you list this year. Share the love? {reviewLink}',
    ],
  },
  'post-event': {
    casual: [
      'Hope your {service} was amazing, {customerName}! Share the experience on Google: {reviewLink}',
      '{customerName}, what an event! Thanks for choosing {businessName}. Quick review? {reviewLink}',
    ],
    professional: [
      'Thank you for hosting your {service} with {businessName}. Your review would help future clients: {reviewLink}',
      '{customerName}, it was our privilege to serve your event. Share your experience: {reviewLink}',
    ],
    grateful: [
      '{customerName}, being part of your {service} was an honor. A review would mean everything: {reviewLink}',
      'So grateful to have been part of your special day! Share your experience: {reviewLink}',
    ],
  },
}

// ------- IN-PERSON SCRIPT TEMPLATES -------
const inPersonTemplates = {
  'just-completed': {
    casual: [
      `[After completing the service, with a smile]

"Hey {customerName}, thanks so much for coming in today! I hope you're happy with your {service}.

Quick question — would you mind leaving us a Google review? It really helps us out as a small business. I can text you the link right now if that's easier!"

[If they say yes, send the review link via text or hand them a review card]`,
      `[As the customer is wrapping up]

"Thanks for choosing {businessName} today, {customerName}! Really glad we could help with your {service}.

If you get a sec later, we'd love a Google review — it's one of the biggest ways you can support a small business like ours. No pressure though!"

[Offer to send the link or point to the review card/QR code]`,
      `[At checkout or departure]

"{customerName}, it was great seeing you today! While your {service} experience is fresh, would you mind dropping us a quick Google review? Even a few words make a huge difference for us. I'll send you the link!"`,
    ],
    professional: [
      `[After service completion]

"{customerName}, thank you for choosing {businessName} today. I hope your {service} experience met your expectations.

If you have a moment later today, we'd sincerely appreciate a Google review. Online reviews are incredibly important for businesses like ours, and your honest feedback helps other customers make informed decisions.

May I send you the review link?"

[Provide the link via their preferred method]`,
      `[During the wrap-up conversation]

"Thank you for your visit today, {customerName}. We strive to provide excellent {service}, and your feedback helps us maintain those standards.

Would you consider sharing your experience in a Google review? I'd be happy to send you a direct link."

[Wait for response, then provide the link]`,
    ],
    grateful: [
      `[With genuine warmth after the service]

"{customerName}, I just want to say — thank you so much for trusting {businessName} with your {service}. It really means the world to us.

I know it's a small thing, but if you felt good about today, a Google review would be such a gift to our team. Every single review helps us keep doing what we love.

Can I send you the link? We'd be so grateful."

[Send link with a heartfelt thank-you]`,
      `[At the end of the appointment]

"Before you go, {customerName} — I just want you to know how much we appreciate you choosing us. As a small business, every customer like you is truly special.

If your experience today was positive, sharing it in a Google review would mean more than you know. It's one of the best ways to support small businesses like ours."

[Offer to send the review link]`,
    ],
  },
  'happy-followup': {
    casual: [
      `[When a customer makes a positive comment]

"That's so great to hear, {customerName}! We love knowing our customers are happy.

You know what would really help? If you could put those kind words into a quick Google review. Other people looking for {service} would really benefit from hearing your experience!"`,
    ],
    professional: [
      `[When the customer expresses satisfaction]

"Thank you, {customerName} — hearing that kind of feedback motivates our entire team.

If you'd be willing to share those thoughts in a Google review, it would be incredibly valuable. Potential customers often rely on reviews when choosing a {service} provider."`,
    ],
    grateful: [
      `[When receiving positive feedback]

"{customerName}, you have no idea how much that means to hear. Honestly, comments like yours are what keep us going.

If you'd ever consider sharing that experience on Google, it would be one of the most impactful things you could do for our small business. We'd be forever grateful."`,
    ],
  },
  'long-time': {
    casual: [
      `[During a regular visit]

"{customerName}! Great to see you again. You know, you've been coming to {businessName} for a while now — have you ever left us a Google review?

Your perspective as a regular would be super valuable. If you get a chance, we'd really appreciate it!"`,
    ],
    professional: [
      `[During their appointment or visit]

"{customerName}, as always, it's a pleasure to see you. I wanted to mention — as one of our most valued long-term customers, your perspective on {businessName} would carry tremendous weight in a Google review.

If you have a moment, we'd be honored to have your endorsement."`,
    ],
    grateful: [
      `[With genuine appreciation during a visit]

"{customerName}, I was just thinking the other day about how long you've been coming to us. Your loyalty means so much to everyone here at {businessName}.

I know it's a lot to ask, but if you've never left us a Google review, it would be such a meaningful way to share what {businessName} means to you. We'd be deeply grateful."`,
    ],
  },
  'resolved-complaint': {
    casual: [
      `[After successfully resolving the issue]

"{customerName}, I'm really glad we could work things out. We take every concern seriously, and I hope you feel good about how we handled it.

If you're comfortable with it, sharing your complete experience — including how we resolved things — could really help other customers. But no pressure at all."`,
    ],
    professional: [
      `[After the resolution]

"{customerName}, thank you for your patience throughout this process. I hope our resolution demonstrates {businessName}'s commitment to customer satisfaction.

If you feel we handled your concern appropriately, sharing your complete experience in a Google review could be very helpful for our team and future customers."`,
    ],
    grateful: [
      `[After resolving the concern]

"{customerName}, I want to sincerely thank you for giving us the chance to make this right. Not every customer would be so understanding, and we truly appreciate it.

If you felt the resolution was fair, sharing that experience on Google would mean the world to us. It shows others what {businessName} stands for."`,
    ],
  },
  seasonal: {
    casual: [
      `[During a seasonal visit]

"Happy holidays, {customerName}! Thanks for being such a great customer this year. As we wrap up the season, it would mean a lot if you'd leave us a Google review — helps us start the new year strong!"`,
    ],
    professional: [
      `[During a seasonal interaction]

"{customerName}, as we close out the year, I want to personally thank you for your patronage. If you'd consider sharing your experience with {businessName} in a Google review, it would help us continue to grow and serve our community."`,
    ],
    grateful: [
      `[During a seasonal visit]

"{customerName}, as the year comes to a close, I just want you to know that customers like you are what we're most grateful for. If you have a moment, a Google review sharing your experience would be the best holiday gift we could receive."`,
    ],
  },
  'post-event': {
    casual: [
      `[After the event wraps up]

"{customerName}, what an incredible {service}! We had such a great time putting it all together for you.

When the dust settles, we'd love for you to share your experience on Google — it really helps other people planning their own events find us!"`,
    ],
    professional: [
      `[At the end of the event]

"{customerName}, congratulations on a wonderful {service}. It was our pleasure to be part of such a special occasion.

When you have a moment in the coming days, a Google review would be greatly appreciated. Your perspective helps future clients envision their own events."`,
    ],
    grateful: [
      `[After the event]

"{customerName}, thank you from the bottom of our hearts for trusting {businessName} with your {service}. Being part of such a meaningful event was truly an honor.

If you'd share your experience on Google, it would mean everything to our team. Congratulations again — it was beautiful."`,
    ],
  },
}

// ------- PRINT CARD TEMPLATES -------
const printTemplates = {
  'just-completed': {
    casual: [
      {
        headline: 'Loved your visit?',
        body: 'We\'d love to hear about it! Scan the QR code or visit the link below to leave us a quick Google review.',
        cta: 'It takes less than a minute!',
      },
      {
        headline: 'How\'d we do?',
        body: 'Your feedback helps us get even better. Leave a quick Google review and let us know!',
        cta: 'Scan. Review. Done!',
      },
    ],
    professional: [
      {
        headline: 'Your Feedback Matters',
        body: 'Thank you for choosing {businessName}. We value your opinion and would appreciate a moment of your time to share your experience.',
        cta: 'Leave a Google Review',
      },
      {
        headline: 'Share Your Experience',
        body: 'We strive for excellence at {businessName}. Your honest review helps us maintain the high standards you deserve.',
        cta: 'Review Us on Google',
      },
    ],
    grateful: [
      {
        headline: 'Thank You!',
        body: 'Your visit to {businessName} means the world to us. If you had a great experience, please share it with others.',
        cta: 'We\'re grateful for your support',
      },
      {
        headline: 'You Made Our Day',
        body: 'As a small business, every review makes a difference. Thank you for supporting {businessName}.',
        cta: 'Share the love on Google',
      },
    ],
  },
  'happy-followup': {
    casual: [
      {
        headline: 'Glad You Loved It!',
        body: 'Share your awesome experience with {businessName} so others can discover us too.',
        cta: 'Quick scan, big impact!',
      },
    ],
    professional: [
      {
        headline: 'Thank You for Your Kind Words',
        body: 'Positive experiences like yours help others choose {businessName} with confidence. Please share your feedback.',
        cta: 'Leave a Google Review',
      },
    ],
    grateful: [
      {
        headline: 'Your Happiness Is Our Mission',
        body: 'Knowing you had a great experience fills our hearts. Sharing it on Google would mean the world.',
        cta: 'Thank you from our whole team',
      },
    ],
  },
  'long-time': {
    casual: [
      {
        headline: 'Thanks for Being a Regular!',
        body: 'You\'ve been coming to {businessName} for a while now. Your review as a loyal customer would be amazing.',
        cta: 'Share why you keep coming back!',
      },
    ],
    professional: [
      {
        headline: 'Valued Customer',
        body: 'As a long-time patron of {businessName}, your perspective is especially valuable. Please share your experience.',
        cta: 'Your review matters most',
      },
    ],
    grateful: [
      {
        headline: 'Grateful for Your Loyalty',
        body: '{businessName} wouldn\'t be the same without loyal customers like you. Your review would mean everything.',
        cta: 'Thank you for your years of support',
      },
    ],
  },
  'resolved-complaint': {
    casual: [
      {
        headline: 'We Aim to Make It Right',
        body: 'At {businessName}, your satisfaction is our priority. If we resolved your concern well, let others know.',
        cta: 'Your complete story matters',
      },
    ],
    professional: [
      {
        headline: 'Customer Satisfaction Guaranteed',
        body: '{businessName} is committed to resolving every concern. If we earned back your trust, please share your experience.',
        cta: 'Leave an honest review',
      },
    ],
    grateful: [
      {
        headline: 'Thank You for Your Patience',
        body: 'We\'re grateful for the chance to make things right. Your complete experience — and how we resolved it — helps others trust {businessName}.',
        cta: 'We appreciate your understanding',
      },
    ],
  },
  seasonal: {
    casual: [
      {
        headline: 'Happy Holidays!',
        body: 'From the {businessName} team — thanks for a great year! A review is the best holiday gift.',
        cta: 'Cheers to another great year!',
      },
    ],
    professional: [
      {
        headline: 'Season\'s Greetings',
        body: 'Thank you for your patronage this year. {businessName} values your feedback as we look ahead.',
        cta: 'Share your experience on Google',
      },
    ],
    grateful: [
      {
        headline: 'With Gratitude This Season',
        body: 'You are the reason {businessName} thrives. This season, we\'re most grateful for customers like you.',
        cta: 'A review would mean the world',
      },
    ],
  },
  'post-event': {
    casual: [
      {
        headline: 'What an Event!',
        body: 'We loved being part of your special day. Share your experience so others can find {businessName} too!',
        cta: 'Scan to review!',
      },
    ],
    professional: [
      {
        headline: 'Thank You for Choosing Us',
        body: 'It was our privilege to host your event. Your review helps future clients plan their own memorable occasions.',
        cta: 'Share your event experience',
      },
    ],
    grateful: [
      {
        headline: 'Honored to Be Part of Your Day',
        body: 'Being trusted with your special event at {businessName} was a true honor. Sharing your experience would mean everything.',
        cta: 'We\'re forever grateful',
      },
    ],
  },
}

// ------- FOLLOW-UP SEQUENCE TEMPLATES -------
const followUpTemplates = {
  email: {
    casual: {
      day1: {
        subject: 'How\'d we do, {customerName}?',
        body: `Hey {customerName},

Thanks for visiting {businessName}! We hope your {service} was great.

If you have a quick moment, we'd love a Google review:

{reviewLink}

Thanks!
— {businessName}`,
      },
      day3: {
        subject: 'Quick reminder from {businessName}',
        body: `Hi {customerName},

Just a friendly nudge! We sent a note a few days ago about leaving a Google review for {businessName}.

If you haven't had a chance yet, here's the link again:

{reviewLink}

Even a sentence or two helps. No pressure though — we appreciate you either way!

— {businessName}`,
      },
      day7: {
        subject: 'Last one, promise! 😊',
        body: `Hey {customerName},

This is our last reminder — promise! We just wanted to give you one more chance to share your {businessName} experience.

Your review helps other people in our community find great {service}:

{reviewLink}

Whether you review or not, we're grateful you chose us. Hope to see you again soon!

— The {businessName} Team`,
      },
    },
    professional: {
      day1: {
        subject: 'How was your experience with {businessName}?',
        body: `Dear {customerName},

Thank you for choosing {businessName} for your {service}. We hope the experience met your expectations.

Your feedback is valuable to us. If you have a moment, we'd appreciate a Google review:

{reviewLink}

Thank you,
The {businessName} Team`,
      },
      day3: {
        subject: 'A brief follow-up from {businessName}',
        body: `Hello {customerName},

We wanted to follow up on our previous message. If you haven't had the opportunity to leave a review for {businessName}, we'd still appreciate your feedback.

Your experience matters to us: {reviewLink}

Thank you for your time,
{businessName}`,
      },
      day7: {
        subject: 'Final follow-up — your feedback matters',
        body: `Dear {customerName},

This is our final reminder regarding your recent experience at {businessName}. We understand life gets busy.

If you have a brief moment, your review would be greatly valued:

{reviewLink}

Regardless, we look forward to serving you again.

Sincerely,
The {businessName} Team`,
      },
    },
    grateful: {
      day1: {
        subject: 'Thank you for visiting {businessName}!',
        body: `Dear {customerName},

We're so grateful you chose {businessName} for your {service}. It was our pleasure to serve you.

If you'd be willing to share your experience, a Google review would mean the world:

{reviewLink}

With gratitude,
The {businessName} Family`,
      },
      day3: {
        subject: 'Still thinking about your visit',
        body: `Hi {customerName},

We're still grateful for your recent visit. If you haven't had a chance to leave a review, we totally understand — life is busy!

But if a moment opens up, we'd be so appreciative:

{reviewLink}

Thank you for being wonderful,
{businessName}`,
      },
      day7: {
        subject: 'One last thank you from {businessName}',
        body: `Dear {customerName},

We don't want to be a bother — this is our final note. We just wanted to say one more time how grateful we are for your visit to {businessName}.

If you're ever moved to share your experience, the link will always be here:

{reviewLink}

Thank you for everything. We truly appreciate you.

With warmth,
The {businessName} Team`,
      },
    },
  },
  sms: {
    casual: {
      day1: 'Thanks for visiting {businessName}! Quick review? {reviewLink}',
      day3: 'Hey {customerName}! Quick reminder — we\'d love your Google review: {reviewLink}',
      day7: 'Last reminder from {businessName}! Your review helps our small biz: {reviewLink} Thanks!',
    },
    professional: {
      day1: 'Thank you for choosing {businessName}. We\'d appreciate your feedback: {reviewLink}',
      day3: 'Following up from {businessName} — your Google review would be valued: {reviewLink}',
      day7: 'Final reminder: share your {businessName} experience on Google: {reviewLink} Thank you.',
    },
    grateful: {
      day1: 'So grateful you chose {businessName}! A review would mean the world: {reviewLink}',
      day3: 'Still thankful for your visit! If you get a sec, a review helps so much: {reviewLink}',
      day7: 'Last note from {businessName} — thank you for everything. Review if you can: {reviewLink}',
    },
  },
}

// ------- HELPER FUNCTIONS -------

export function fillTemplate(template, data) {
  const { businessName = 'Our Business', customerName, service = 'service', reviewLink = '', staffName = '' } = data
  const name = customerName || 'there'

  let text = typeof template === 'string' ? template : template
  if (typeof text === 'object' && text.body) {
    return {
      ...text,
      subject: text.subject ? fillString(text.subject, name, businessName, service, reviewLink, staffName) : undefined,
      body: fillString(text.body, name, businessName, service, reviewLink, staffName),
      headline: text.headline ? fillString(text.headline, name, businessName, service, reviewLink, staffName) : undefined,
      cta: text.cta ? fillString(text.cta, name, businessName, service, reviewLink, staffName) : undefined,
    }
  }
  if (typeof text === 'object' && text.headline) {
    return {
      ...text,
      headline: fillString(text.headline, name, businessName, service, reviewLink, staffName),
      body: fillString(text.body, name, businessName, service, reviewLink, staffName),
      cta: text.cta ? fillString(text.cta, name, businessName, service, reviewLink, staffName) : undefined,
    }
  }
  return fillString(text, name, businessName, service, reviewLink, staffName)
}

function fillString(str, customerName, businessName, service, reviewLink, staffName) {
  return str
    .replace(/\{customerName\}/g, customerName)
    .replace(/\{businessName\}/g, businessName)
    .replace(/\{service\}/g, service)
    .replace(/\{reviewLink\}/g, reviewLink || '[Your Google Review Link]')
    .replace(/\{staffName\}/g, staffName || 'our team')
}

export function getTemplates(channel, scenario, tone) {
  switch (channel) {
    case 'email':
      return emailTemplates[scenario]?.[tone] || []
    case 'sms':
      return smsTemplates[scenario]?.[tone] || []
    case 'in-person':
      return inPersonTemplates[scenario]?.[tone] || []
    case 'print':
      return printTemplates[scenario]?.[tone] || []
    default:
      return []
  }
}

export function getFollowUpSequence(channel, tone) {
  if (channel === 'email' || channel === 'sms') {
    return followUpTemplates[channel]?.[tone] || null
  }
  return null
}
