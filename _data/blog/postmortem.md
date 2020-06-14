---
template: BlogPost
path: /postmortem-meeting
date: 2020-06-15T10:00:00.000Z
title: "Postmortem meetings: what are, how to conduct and the benefits"
metaDescription: >-
  What are postmortem meetings? How post meetings are related to culture and DevOps?

  I try to brief summarize a lot of concepts and start talking about SRE and DevOps with the postmortem that must occur after every incident!
thumbnail: /assets/postmortem-learning.jpg
---

> Photo by [Alexis Brown](https://unsplash.com/@alexisrbrown) on Unsplash

Let's be honest, we work with software and **incidents will happen.**

You can try to prevent this, create [crazy monkeys](https://github.com/Netflix/chaosmonkey) that will make you ready for when it happens, but it's going to happen. Someone maybe is paged in the night with some production bug and all servers down.

Maybe it's just a small bug that doesn't affect not even ten people or maybe is an outage that everyone talks about on twitter.

Anyway, it's going to happen and your team will probably find a way to solve, but what happens after that?

## What is a post mortem meeting and how is this related to culture?

Post mortem meetings are one chapter of the [Google SRE Book](https://landing.google.com/sre/sre-book/chapters/postmortem-culture/) and one of my favorites, to be honest.

The chapter in the book, in summary, talks about **learning.**

The meeting is done not to find guilty or who we gonna blame this time, **they're made to understand how can we improve and learn from our mistakes.**

> "The cost of failure is education."

_Devin Carraway_

The person who will conduct this ceremony needs to follow a few strategies to extract the best possible from the people involved, action points must be created with owners and we must learn to avoid the mistake again.

## Culture

### Avoid blame

Avoid blame and don't try to find who's guilty when something bad happens. We're humans and make mistakes, but more important is that we should learn from our mistakes to avoid them in the future. If we're afraid, to be honest, and people point fingers saying things like: "wow, so the downtime was your fault". How can we learn? How can we find the root cause?

**Don't blame people, they make mistakes. We must learn with mistakes to make adjustments.**

I like to remember the prime directive of retrospectives at the beginning of every postmortem meeting.

> "Regardless of what we discover, we understand and truly believe that everyone did the best job they could, given what they knew at the time, their skills and abilities, the resources available, and the situation at hand."

_Norm Kerth, Project Retrospectives: A Handbook for Team Review_

### Structure

There are a lot of template structures for postmortem meetings and it is good that you follow one of these to don't get lost in the middle. [Here you can find a lot of them](https://github.com/dastergon/postmortem-templates)

I like to have the following items:

- **Date**
- **Participants**
- **Summary** - Short description of what happened
- **Timeline** - Detailed description of everything that happened and led to the problem until everything that was made to solve. Also is good to include affected users, changes made and also any event that happened after the incident was solved
- **Impact** - How much time your software or product was down? How many users were affected?
- **Action Points** - Anything that can prevent this or any other incident related to happen in the future.

You can add whatever you want to your report, what **your team** think is important to have.

### **Root cause identification: The Five Whys**

To analyze any problem and why this problem happened you can use: The Five Whys, a [root cause identification technique](https://www.atlassian.com/team-playbook/plays/5-whys). Here’s how you can use it:

- Begin with a description of the impact and ask why it occurred.
- Note the impact that it had.
- Ask why this happened, and why it had the resulting impact.
- Then, continue asking “why” until you arrive at a root cause.

List the "whys" in your postmortem documentation.

### Every action point must have an owner

This is super important, and maybe we don't value enough. If something doesn't have an owner, how can you know if something is going to be made? This person doesn't need to do the task, but she needs to make sure that everything is going with the action item

## SumUp Incident of the Month

Here at SumUp, we do something super nice to make sure that we understand that incidents happen and should be open with this.

Every month, we have a meeting called All Hands with all the engineer team and we present the biggest incident of the month. So, we talked about what the team learned and how can we can keep avoiding new mistakes.

## What to know more about it?

How do you run post mortem in your company? Did you like it? Or had you been in a "find the guilty meeting"?

Also, I would like to thanks a lot [Hernandes Sousa](https://twitter.com/hernandes), our Lead Site Reliability Engineer at SumUp who taught me a lot about what is DevOps and how we can evolve with learning.

If you wanna know more about DevOps and SRE, don't forget the read [Google's SRE books](https://landing.google.com/sre/books/) or the amazing The DevOps Handbook

**We have jobs open for [SRE Engineer at SumUp](https://sumup.com/careers/positions/s%c3%a3o-paulo-brazil/engineering/devops-engineer/4515680002/), come talk with me or Hernandes if you're interested.**

Are you doing postmortem meetings at your company? How it's going [send me a tweet at @herberth3nrique](https://twitter.com/herberth3nrique)!
