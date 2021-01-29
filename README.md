# Baseball Card Creator

## To Do

proving injecting all over the place so you don't have to think about tree is apparently slow, just like using \$root. My application is SUPER small though, and using Vuex for like 20 fields doesn't feel proprtionate to me.

move stepper/incrementer to own component

front default color is so close to active tab button color that they misleadingly appear to be actions

move color picker to own component

modularize l2 controls

since need option to hide logo, i might need to retore the toggle menu like the one on the image...

is the app getting slow?

doing show/hide button through the model ends up being pretty slow -- it hyfrates everything again... laggy experience...

photograph grip of easton bat downstairs
also maybe consider wood grain...

position of char countesr

text sliders filters drag drop -- these all compete for the same box and maybe they should each ensure they're the only one open... if user selects a textbox while image filters are open, i don't just want everything to close -- and currently those steps end up with both of them open.

tap highlight selected color on radio buttons image filters

or a universal background button that forces any/all controls to close... hmmmm

the fab button close i think could be forced into a full screen thing that you'd necessarl click uopn... Popovers come with a tad too much associated work, which is self -defeating

the ion-popover sees pretty expensive in that itS adding/removing dom elements -- better just to toggle visibility (which I had been doing with fab button) and add click outside to close...

if popover is open, prevent another one from opening... the inputs in the popover content are spawning thir own popovers

z-index "logical" property classes like "nothingElseEverAbove" and "justBarelyEnough" or something...

if painters tape is ok (seems maybe too much) then override ion custom properties because shadow dom

strip out ionrange in favor of good ol' range...

having zoom issues -- is that why the viewport was so hard coded before? Way too wasy to accidently zoom in and then next to pimpossible to zoom out

gradugula start stop mouse stuff maybe a hdnler that makes body overflow hidden?

app itself could use darkmode -- wouldnt' be too cmplicated...

on iphone 5 front almost fits -- need to reduce controls touch targets i think to 4rem. Again for iphone5, Shorten L1 (and L2) to 48px

again how do i represent landscape orientation card on tight portrait screen like iphone 5?

snimstion styles alraedy in place -- but hidden tho on tabs will have to be replaced pronto. It is a rewarding effect i think.
rotation is cool and rewarding, but i don't want to get stuck on it right now i don't think

char counter for textareas? Should be dead simple, even via focus psudeo element that gets its content from a data attr bound to that field's length

qhat does 0 seasons and 0 stats look like?

prevent click on logo so only long press works? Doesn't work. Oh well it was a bad idea anyway

also it flashes -- i can improve this AND move the function to a parent to be shared by children. setTimeout is working and my first couple attempts at using nexttick haven't succeeded... Improve space replacement and also worst case stop importing nexttick. paste is actually working but it only applies to text that is already present... \*you can test this by pasting a coupe times -- you'll see previously pasted text gets its breaks removed. works on paste -- but on paste, maybe returns should be made into spaces insread of ignored. cyrrently on input event -- should it be only enter and paste? No maybe there's some other magic way to sneak in text...Lazy? Can I show user its not allowed?
since i'm passing value through vue i should be able to do somehting to it indeed like with computed or a trim method or something
should i consider disableing enter key? But wouldn't copy paste still do it? Yeah copy/paste does it anyway so...

--5

use v-model.lazy where snesible (not point updating the model every character right?)

prune unused css vars, especially from index.html

style aside text max-height by orieintation. Do it via a var scoped to horizontal.

for aside textarea and footer textarea, can i make 280 chars work? That would allow tweets as content

reconsider placeholder rather tahn content, you know? Less work for user.

universal tightening down to phone x? For landscape orientation that is

async await for data call

splash images inflated this project by 400%. improve asap

android icons i think are default capacitor/ionic and need to be changed via command line:

grain _could_ be a slider

do i need to use ion page? eventually i will want routes but for now?

need to re-tabulate after addition/removal of years

i need to sketch out card back layouts simple, imperatiev -- right now, i'm kinda stuggling against my own code -- heh

not really using define component... just using options api

removing stat columns can be done super hackily by just hiding.

but for chainging number of years, the tabulation for a column need to factor out the "removed" year.

and remember, avoiding a loop within a loop could be important because time complexity. Seems so tempting but for now keeping rows distinct has its simpicity advantage.

So, since this will prob need a function anyway, maybe show/hiding columns with css is too lazy. What happens to the model? Yeah, don't delete or clear field. Just use attributes somehow (disabled or something?).

range -=- make circle target bigger (and still thinking through whther to have that circle be a baseball (could also be route-based, football, baketball, etc.))

on ios the columns are chaing width based on input -- eitther that's a specific thing to address, or maybe something i just screwed up when making those into loops

center Career Highlights aside headline when horiztontal nowrap. I think. Maybe always and this should just stretch so the cetering looks complete... so yeah maybe undo that left align

refactor/rename cardfront so CardBack is a proper sibling

beers and pot cards.

standardize card alignment across tabs. Because layout is different, styles are different. Standardize in practical way. Consider flip.

the fab button might not haev been a well thought out choice because i want clicking outside of the card itself to close -- wasnt this my focus within? Ugh.
POPOVER might be a better choice...

can probably pass in belnd mode as argument to gain filterr so only need 1 filter... seems like a good Vueish task

consider an additional poterization filter or two with more colors, represening printable gamut improvements

hard to access all text sliders when keyboard is open, and we do want the keyboard to open. So tighten up vertical spcing and text eac row on each layout

logo hide feature.

random thought that may not be useful -- consider logo as a floating action button. One prob though i could see would be to drag it while it's open. Might be weird in transit (though i can keep specific hidden during drag)

FAB now centered in middle design row, which is where it needs for layout purposes.

filters:
icon turn back clock?

- grain from https://codepen.io/stoumann/pen/MWeNmyb
- or dust from https://yoksel.github.io/svg-filters/#/presets/dust
- old times from https://kazzkiq.github.io/svg-color-filter/
- slight pixel shift as in https://codepen.io/inegoita/pen/WNQJyro

mutlicolumn select (or whichever the exact ionic comonent is, could be perfect for stat type/year (although))

for year(s), could be multi-select: Multiple Selection hmmm

might be safer to use ionic vue's "Reorder" drag drop...
maybe cobine with backdrop (even if transpparent) to prevent scroll while dragging

ok on mobile safari, focusing input at bottom correctly scrolls down... Need more testing with native app maybe... need to sketch this out.

Ideally, dragula wouldn't activate until that long press haptic -- it behaves correctly then...

long press only for dragula? that's when it works best without intervention. Do I have browser level access to that event? i must...

it's a bit fiddly adjusting font variations and text -- there is a focus within nconsistency perhaps.
logo overlaps the focus ui

height media queries so taller phones get bigger touch targets -- will help allow ficing the position i think/hope

drag/drop scroll up down fix

is there layout topRight stuff i can comment out now that drag and drop is in place?

better maybe to write down layout & dimensions and re-write becasue the small thing i'm looking

although culprit may be a combination of top padding and input height... still a refacotr, even with consistent explictness, might be less

how to implement Hide logo? Maybe it's an option on click?

it's row middle for design that changes heoght --

from 416(good) to to 434 (bad)
at present changing layout impacts image zoom/fir
which should it be 504 or 520? 504 is correct

dropzones work but need to set to 50%
dragging logo works -- simplest to create drop zones? Maybe
and is this Vue safe??? Sketch this out? dropzones should be quartered -- quadrant -- 4 and you only have to cross threshold for logo to be snapped into correct location

async await-ify the fetch

since main tagert is now apps, is the savings of Anybody worth more than some more perfect yet larger variable typeface (iuncluding ones previously used in this project)

migrate the fetch api function(s) / with dummy endpoint

definitely redo the color picker with vanialla colorful: https://web-padawan.github.io/vanilla-colorful/

on larger screens, background could be a plastic sheet of cards

leroy image on initial load seems to short and then resizes on refresh -- maybe there's too much going on between explicit width height, object fir and lazy load...

inputs seem to work so far at least on ios...

test radio, toggle, custom stepper

input customization in shadow root and passed in as var of course --bar-height bar-background, etc

tree shake ionic core css and js --

need to sketch out image layout... it's off but how why without adding code randomonly -- also do i really need slot here?

focus outline on text fields looks jumpy i'm sure integrating styling will help

consider putting css vars back in index.html -- did it for a reason in the first place

really debating router. Really need undo? Back tho. populate some history? I think it adds quite a bit to project size, complexity. DonT spend too much time on this until I'm sure of best path forward.

consider multi-column ion pickr for years / stats or even higher level options https://ionicframework.com/docs/api/picker. Can be animated and shows many options all at once

should i use ion back button? Isn't usng routes enough/better? Don't they automatically give user native expected back button functionality?

enroll in apple developemnt program
ios build failed could not find xcode project -- hmmmm

for iOS i've installed AltStore and trusted developer and am running AltServer on machine connected to same wifi. Offers sideloading

need to create an ipa file -- i think i can do this...

keystore purpleMonkey

for app: ionic, as resistant as i am based on the arguably better practices of nativescript.
but losing many hours to nativescript setup, whereas with ionic i got a running app instance from my phone in like 2 mins. So...

need:

- ios App development / Store certificate and a provisioning profile
- android keystore file, key alias and key password

the player image is missing from recent vercel deployments...

improve colorpicker a tad more on iOS - the issue i think is border on input type color --

consider moving L2 controls beneath card.

focus states on stepper buttons need customization b/c shape is weird

if stats are 0 then no years, right?

should start with fewer than 5 stats and/or fewer than 5 yrs. Very good designed thqt way since it all fits -- but it'll show user there's more and entice rather than overwhelm (which it definitely has done)

pointer events none MIGHT be allowing zoom -- so search for it

better validate number of rows / cols because disabling the button allows zoom and might be bad practice -- maybe just add check in handler? But visually there should be some disabled class right? uCantClickMe

refactor data soi -- not sure i need/want the data-attr since i \*may need a class anyway

re-style slider containers

continue polishing input font variation settings

wtaf happened to yarn? i reinstalled but basically it vanished and re-adding it to path did nothing because it was gone... i think... oof.

max-width of app on desktop and stuff... not sure what best to do

add pic images dont get tabbed

focus styles on the cardfront/cardback buttons

slight gap in image editing fielset legends

if overlay color picker with same texture it'll match: if top were 44 and L2 60 -- that saves lkike 18px and we're halfway there... But can't quite get all the way there, user may have to scroll anyway and effort to achieve questionable benefit for subset of users with tiny screens who resent scrolling? Not a good use of time... Scrolling is good and fine... Maybe sticky could be cool...

on iphone 5, for instance, any way we can ensure the bottommost text row shows? We're short like 48 px

be wary of current color on placeholder logo until you're ready to offer that deature to user (might not want to default to it since a user's logo may already have its own border) -- would be a good feature but v2? I really like the effect though. If...

16px margins on card front seem a hair thin...

PUT SERVICE WORKER BACK AFTER DEV -- really want env var here

implement indexxedbd

paige image: hat logo is now an O but that goes with nothing.

it doesn't clash with the ficition team and b) for any copyright whatever, despite the fact athat image itself is in common domain

consider touch target 44 like var(--touchtarget) for small screens, and 4.8 at min something like 414... BE careful though because trying to keep card dimensions unaffected -- this would be for L1 & L2

meditate on how card back horizontal can truly show horizontal.

- table spacing like for city -- tighten that, natch

if possible on non-tiny screens, lower interaction cost of discovering image filters/ logo position... maybe they always should be visible on non-tiny scrrens, but might need to speararte them because maybe there is an appropraite UI to tie to clicking the image (as opposed to nothing)

consider max-width 399 because that's more the idea

web tap highlight annoying when touching image div, at least when image is absent

with such little CSS (less than 4kb compressed, which is what matters for this particualr decision), it \*might be best for build to INLINE css on html page... save a request and kep index less than 14

orientation portrait on back has wonkey text slider positioning for aside career highightlights text sliders

where possible CONSIDER (re)flattening data -- it's going to save cycles at some point maybe

finish adjusting font parameters for Anybody. For instance, the max or min values allowed on range inputs are based on roboto not Anybody, which has wider values...

ok so in composition API, the data object isn't so broken out... ahhh... i missed that bit... Or did it just get moved to one of their reputposables?
https://v3.vuejs.org/guide/composition-api-introduction.html#standalone-computed-properties

Tabs: must retain tab state in model (not hash) -- AND, 'aria-selected' and 'disabled' will need to be tied into this modal no big deal really :disabled=""

    // removed async attr - reasoning us that user would expect nothing else to be prioritzed over their desired action of switching tabs ( i think )
    // could use a ref here maybe for the wrapper perhaps
    // then could query that ref
    // also, *use model here, right?*
    // :hidden :aria-selected

test tab-throughs.

or maybe 1 year with "Add Seasons" option... hmmm or maybe X over 5 column inisinal layout so user can obvi remove some... dunno...

UI for sum or average on a given field and then how to display difference in stat table so itS clear that 3 seasons of 1 hr each doesn't equal 3 total, but 1 avg. Why set up for mistakes?

stats table 5x5: type number isT great for iOS. Maybe even Select:
Years:
0: hide stats entirely
0: Rookie card!
1
2
3
4
5 --> default

verify card front/back being size . Hard to tell until L2s are restored and are same height front and back

ensure name atteibutes for radios unless clashes wiht v-model -- do thye clash / have to match? I'd prefer they matched but is that just actually shadowing?

Per updated vue docs: mabe this addresses the issues i had with loops (specifically inputt ype ranges weren't initializing with proper value until one is interacted with... Maybe this:)
key usage on

```
<template v-for>
```

and non-v-for nodes has changed

---

i think the image buttons on the front l1 controls work because they are labels and the actual input in inside component.
that's opposed to colorpicker, which an input element and tied into the component until pass props (which is straightforward)

after making front and back same size effectively using outline and box-shadow,
need to adjust image filter and logo poistion controls
orientation icons

adjust spacing for vertical orientation

tap highlight select transparent in tabs -- i see quick flash

on cardback L2 controls, show number of years and number of column options (standard spreadsheet type input ) [ input ] x [input ]

could give more control over table type (like # of columns, # of years)

if used methods watchers computeed maybe instaed of input event for encode, that might be cleaner and easier to trigger on load... hmmm, can i feed an initital value?

the copy for front/back labels ins't quite right. But I had to had to had to better indicate the meaning of BACK when it has such a specific web meaning already...

hover over footer total should give disabled cursor or pointer -- NOT misleading symbol indicating edit

choose default color with more contrast against background so it's more instantly clear that the colorpicker is for card background color

then, touching on the actual logo could give you logo only options, and the player image could give playerimage only settings...
but is that realistic? A sticking point is the filter... it kinda neds to apply to both player image and logo otherwise come on...

the logo/border curve alignment is fiddly still -- TRY a before/after square element. Easier than try to align curves

the cleanest way to treat the default images MIGHT be just to treat them as data. Does the canvas ever become empty? I don't thnik so...

slight gap if you look really close, especially on mobile. Probably bordrer related

finish refactoring tabulation. Nearly certain i can get a single pass function. I'm not sure whther the current setup adds of saves the brower work. I think it adds.

re-punch up cardback after removing grad. Text too thin

either remove/repalace grad or just rename it "extraboldness" for now...

create exact same schema in json, data() and indexdb

would ismplest thing be to super throttle a watch function and re-save? I think maybe so let's try
using handlers thiugh also seems fiddly.

pass data via props into cardFront and cardBack from App based on whether local data exists yet or not. Makes sense at the App level to me.
although, thinking this through, user may have doen side front bu tnot back.
Ah, but back would always at least have the name and position, right?

logo image should be made small on encode

paw is good for logo and logo button

avoid watching sliders so much potential for making cpu fan explode

GRAD is making ugly letters...

to toFixed on the average reducer funciton -- that should LIMIT the num of deimila places to 2, but i want to allow 0 places instrad of .0

can try inline worker

i think i'm forcing setup wrong if i need THIS. I'm not following the composition pattern. But thatS ok and in this case maybe preferable

make cardback async

re-refactor inputs scss per v4

review readme in v4 for additional ideas i may have added at some poeint

bettwe click outside to close like underneath on desktop? it doesn't take up full height...

touch indicator at least on initial load for logo image
emphasize those image upload buttons more. Thumbprint icon? in v2 i could try to graduate them.

after editing career highlights, sometimes hard ot click table stats without triggering career highlights again

---

### Notes

wrning not error:

WARNING Compiled with 1 warnings 5:18:40 AM

warning in ./node_modules/@ionic/vue/dist/index.js

"export 'useRoute' was not found in 'vue-router'

to remove router from dependencies must i drop ion page? hmmm...

The Anybody font is a HUGE win. Credit goes to etceteratype and to the github commit's of sursly (https://github.com/sursly). Saved 881kb and now my overall proj is down to like 230 kb before images, or down to 120kbb bortli before images...

dimensions of card: 2.5 x 3.5 in: 6.4 cm by 8.9 cm

so 320 x 448px but adjusted up to
but i went with doing 360 x 504. I think because everything dived niceley vertically

cat paw logo could be over the outline of astate... or, for instance, the outline of brooklyn

i think i'm doing too much work with computed AND watch -- harnessing one way, then behaving accordingly, is prob better

actually i don't think i want to use provide/inject for everthing. There could be a master object MAYBE that front and back emit to. But data can be split between front and back, and if anything I need to decouple them more so chunking them apart for asyn purposes would be simpler (yes, can load back async -- but, if a returning user's data is frontshowing: false, then load back right away, and front AYSNC. I think thatS achievable. Card Front and back really shouldnT share anything. Even the name should AT MOST maybe auto-inherit, but not sync. If it syncs then i have to think about which line on the cardfront is actually NAME and also possibly provide author with ability to decouple the fields. So if it's just really that one field, maybe inject is perfect for that one field...
So state can/should live in front/back. Myabe... I need to keep mulling this.

can i go an inject on mounted?

tree shake vue? i think must only look at vue code coverage after build.VUE ooks like Vite optimizes the fuck out of vue.
and my code coverage is pretty good indeed. Fun to explore that

the wider the range input is, the less it looks like a toggle. Achieving this now. should border curve basically be a toggle? it almost looks like a broken toggle if it's not allowed to grow wide

    //reason that iM ok here with less than 44px is that when they are next to each other, focus UI makes it less of a huge deal if user taps the adjascent box. Not ideal but also still clickable

- group/team bulk stats upload
- sell to youth sports leagues

--> Pitch an extension/investment.

--> Print partner? Need whitelabeling or at least to achieve some sort of margin

--> absolutlely cannot find that blog post about auto-sizing grid when cells unused

-- not sure if this would be considered a hack that might be prevented in future iOS updates, but setting font-size to 16px and then using font-variation settings to achieve desired visual size works at present and avoids the zoom plague

stick to cm/mm even if it's off by 1mm. Much more sensible. Aim for 1cm touch targets. PLus math is so clean. But, the 3.5" x 2.5" aspect ratio is a cleaner 1.4 (rather than 1.39) -- but does that matter?

consider 44px 22px 11px -- certainly unconventional but could work

can i offer a 48px touch target (off to the side perhaps) while maintaining tight vertical content like cards actually have?

--> using filter drop shadow mutliple syntax could help here. Just not sure exactly when

--> css backdrop filter is cool/intertesting/well supported: https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter

- CLS is being caused by at lease these, so think man, think:
  (if initial font is better sized to match loaded font, then won't flex... Obvi caching is the way, but first load... )
  tr
  tr.stats-table t-body-tr
  td.stats-table-t-body-td
  blockquote

  --> might be good to show all font adjustment buttons for each text input, but not all buttons would be enabled for all fields. That way user won't wonder "what happened to width option?" but will be shown it just can't be applied here (may need clear helper text about limitations)

the way to make a mask is via computed and watchers, set/get. No need for a mask plugin.
and, after considering it, i donT think i need a table plugin. If I can properly tag columns then doing math on them shouldnT take any special code really. It would just be a formula, and probably use the Computed method

the stepper buttons can be as big as they are with large plus min icons but the background can be smaller so the legend can show better... But putting the span in that button introduces yucky complexuty of more flex properties PLUS event.target uncertaintly (could use current target i guess right?), and it just seems to have fewer fail points in general... but maybe can reconsider

## App

Vue-Nativescript, a port of React Native, has a ton of stars and MIGHT make it easier than {N}-Vue

Nativescript-Vue is the way to go... everything just seems to be between versions right now. I starred 8 repos though

verify no input field zoom following this lightrefactor

reafcotr container classes? long words

logo position squares AND layout icons: active white color--RESTORE AFTER HAVING MOVED IT TO INDEX.html

i stupidly removed previous xcode when installing beta xcode. Nativescript appearently isn't expecting the beta... restore that, but maybe not now on bad internet connection

-- i already have an apple dev account it seems -- upgrading xcode now... The vue3 feature of making it "easier to target native" seems to have evaporated

### Next release

new cpntent bnutton to prompt user to refresh -- best preactice PWA pattern at this point

worker pass reader blob to canvas? measure worker times for the blob/reader, as long as that wouldn't actually make it slower

consider down keys in table colummns

vanilla js animate spring transitions -- i could image spending 16 hours on this, with a really smooth, natural and enjoyable result.
https://joshwcomeau.com/animation/a-friendly-introduction-to-spring-physics/

handle crop/zoom just with object position/fit (OBJECT FIT NONE MAYbe)

if features expland, consider adding Pica or an even more proven canvas image resizer that addresses the many image quality issues that arise when doing this for first time yourself
but what about zoom/crop? since my mom already asked for that fnctionality, and i was thinking about it, maybe there is a single solution.
https://github.com/blueimp/JavaScript-Load-Image -- only problem is that the file is huge (176kb unpacked)
Pica is also enormous

ASIDE & FOOTER!
textareas content strategy/testing:
a) maxlength?
b) b/c may not be feasible to alwasy vertically center textareas w/out ever clipping text, consider adding a visual florish / bottom box shadow that would be obscured by a 2nd/3rd etc line of text (maybe with a text background color or something)

might get too slow with huge photos

don't need TRUE icons for font sliders -- just style a capital A with the relevant hard-coded font variation settings

also, consider relabelling axes because doesnT always make sense to user

shorten class names

if in installed full screen mode can take advantage of more space or at least have a gradient or something

retry gum mix blend mode -- there was problem on ios when background color dark

the placeholder for 0 is grey again why?

have one color function becuase there's double the needed amount of js i think

add {set{ idb key val back (didnT want it as dependecy in v1)}

finish getting rid of options API

does cache storage keep doubling? Ummm... at least each time i reload... hmmmmmmmm

consider moving truly global css vars to index if it'll work and slim the css file

postCSS

decrease bundle size -- split front and back at minimum i think -- ROLLUP BUNDLE ANALYZER
each front & back could be its own app maybe even. Easy split there.
remember which side user was on last.

also can we server side render at all so that all the markup doesn't have to exist in the JS file? Is that a thing?

for saving, consider using screenshot api: https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture
iOS support is different but there i think (hopefully can get OS or Safari to prompt user)
Although canvas might be best no? Yeah prob. There's a lib called

- html2canvas (there is a vue version but is that actually needed here?)
- rasterizeHTML.js

more NAN prevention

consider giving front text sliders left right padding to align with outer border

A char counter will help some fields (thinking textareas in particular)

the back view is cheating and it's kinda square...

the curve logo position equation needs to be tweaked because in the in=between values there's still gap showing

turn off autocomplete to get shorter keyboard? the github phone app i have did that kind of input. Maybe is pattern?

focus colors: consider making consistent across browsers

add more years

perf: is it having to process initial image each time? can we go back to json or static something for load? Would like the skeleton to show immediately...

- re-introduce diagonal table headers
- back header needs serious refactor
- color behind table headers? There's a highlighted
- (this really applies most when card is black) rather than just darkening aside/footer/tablestats, USE LIGHTEN AND DARKEN filtering -- could be done with a css filter even if not a scss function. it should be intensifying contrast (so make lighter than color or darker depening on contrast function -- use hur rotate for instance or a css variable. for instance shouldn't all dark have charcola regions just like all white ha some grey boxes? yah
- refine top tabs type variations

refactor icon color stoke fill -- code is a mess but...

- icons -- **TRY HUE ROTATE 180** want easy way to invert colors (or may need to help contrast a bit for now with lighter highlight color). Move some stroke/fill attributes into CSS
  logo position icons need color work (just don't want to bikeshed further on this)

is there a tap highlight flash i can get rid of elsewhere? like on the tabs? it's annoying...

- ?Get elements in cells to take full size?

- front and back could have icons showing generic avatar in portrait and a stats table icon for back. maybe. (they didn't look great especially since orientations are different -- just going with existing ui for now

put positioing icons in svg defs man

tooltip guided tour minimal

js cropping or really just an anchroing option maybe

consider upgraded color picker: https://web-padawan.github.io/vanilla-colorful/

- "upload pic" and "upload logo" labels improvemnts (something is wrong there) -- brute forced it for v1 -- i think it's combo having svg and an image as direct children of flex... neither does well in that scenario so maybe this is unsurpring

- math -- sometimes things no nuts and the output exceeds 5 digits. Need to use toFixed or something to limit decimal places

- math minvalue 0 for the columns to avoid visual blanks as well as NaN errors, etc

- upgrade project dependencies

- promo screenshots of 3 different designs

- consider decreasing cardBack font weights now that subpizel-antialiasing has punched things up (or making a text shadow or drop shadow with the contrasting color -- this is really for when card is black)

- generalize stat column names

consider extending thead and tfoot (if possible) so there's no visual margin between it and career highlights. Maybe.

- consider char counter

- math to v2 because something isnT right and i AM using beta... so just breath

- make table headers reactive/vmodel based
- v-model bugging out, making the input lose fous with every keystorok... there is a bug -- the v-model is
- math: validate against NAN, etc... in compterd...
- parsefloat -- is there a better place to run this? Would this be needed with proper TS use? hmmm
- math: computed. Grab an array by refs if necessary and tally those bitches. Can we have only a column recalcute as opposed to the whole table? Yes the watch could be scoped to a an array of only that column's cells. math: JUST TOTALS for v1. averages can be v2 because that will require UI work to allow user to select which kind of career stat (total, avg, is there another?) to show for that column...

-- carefukly factor out data column junk attributes bc some areused for styling

- back color picker -- how can i get the whole card to show? Really want to see bottom of card when choosing color
  -- (wait -- when color picker is open, can the controls hide?? oooh....)

--> For lines with 2 text inputs, consider not allowing width adjustments (maybe just color, grade, slant)

- Establish data flow:
  -- share state? Vuex?

- User shouldn't have to save anything manually (although a button to force it to happen on request can be reassuring). So when do we save to indexedDB?
  -- use blur event and see whther placeholder is showing (can select that in JS)

1.  If a value for a given field in indexedDB is null or doesn't exist, then grab the json default data for that field

2.  On X event(s) [blur with placeholder not showing] and/or at Y time(s), save fields that user changes to IDB. Do this async and, if it makes sense, have a WORKER do this to keep the UI thread free (maybe for a dostracting animation)

- Add Examples (start with JSON)
  --> CREATE A TEMPLATE spreadsheet XLSX on google drive, with an instruction about how to export a file that can be imported directly on the card site: OR Creat a service:
  http://beautifytools.com/excel-to-json-converter.php
  https://www.npmjs.com/package/xlsx-to-json

--> there could be associated routes for each pre-configuation

- birthday cards
  -- untappt cards
  -- github cards
  -- genealogy cards
  -- PRESIDENTS & politicians
  -- baseball current example
  -- school photo option ( cash money )
  -- birth announcements

-- reduce CLS (see notes)

--> and do i really need to be passing props the way I am in terms of binding :stlye? Well, for scoping reasons it makes sense, for instance with text fields that can be independtly named but we want json to be same. But for some universal variables at the card top, is that inline style actually required? Reactivity i believe is already being achieved.
--> maybe there are more performant ways of setting css vars so there's not so much potential for catestrophic reflow

clicking logo ideally would bring focus to that side of the cardfront image controls

--> do i save indexdb/local storage for v2? Could take pressure off

if you upload a logo, the "none" should be reset (can the last position be remembered if "none" corresponds to a class that does something slightly different?)

- Years: Default to 2019, working backwards X (5) years. Could offer another "start year." Will have to think of easy way to give non-contiguous years without making it too easy for user to make typo... (they could default, and then each be over-rideable via a select menu or data-list or whatever)

make a class/style/icon for the "none/hide" logo radio button

maybe active class for the file pikcer ? actually that mayb be odd

layout icons could use improvement to better show text

for consistency conisder color picker with text label and a palatte icon (to which the text color ocntrast function gets applied)
because fade, CARD FRONT FIGURE DESIGN ROW BACKGROUND should have, ideally, A COLOR HACKGROUND MAYBE LIKE CARD STOCK

gum stain:

- icons
- mix blend mode (and/or maybe add a before AND after to get the desired result)

--> focusin handler on stats table seems to work and properly place cusor at end of input.
But, it seems to work on touch, not mouse. That is, actually, desireable. But when things work without me knowing why it makes me nervous... (maybe click -- is focus within an event?). check if tablget is an iput and
-- don't want to add hander per cell
stats table: move cursor to end. Very simple function. Just a metter of where best to put code/handler....
If selectionEnd is less than selectionStart, then both are treated as the value of selectionEnd.
elem.setSelectionRange(99, 99)

--> consider whether look is better with current stripe placement, or whether it should be the last row before table.
Could make consfigurable i suppose. User could invert all 3 rows, for instance.

--refactor caclcolor vars because we're using it in someplace and not others...

-- consider lighteing/darkening the outline color so it looks more card-like (make it a relation to the bg color: maybe stripe also)

(do i need a 2nd color for duotone?) or is this really monotone until v2?

-- re-reconsider fui for table -- what does that look like?
-- on mobile, the table spans full width anyway... and dinsce the focus ui can cause a disorienting jump anyway that called for a cleanup item, i think we need to scrap it on table, at elast for v1

- can we allow user to switch the order of the text lines for each layout? That might be easier than giving user custom number of cols per row (lower interaction cost)

disabe more spellcheck (enough?)

build out index db (it's already set up to work) to allow saving (replaces previous localstorage implementation).

indicate whether a field can have its font manipulated

-- (further?) reduce visible size of borders for 320px devices so hopefully rest of content can give adequate touch targets in real world measurements (7-12mm) (maybe using min-max clamps?)
-- min touch target 48px wherever possible (playing numerologist right now 44, 45, 46, 48)

- drill into PWA details -- why is dev tools showing installation probs related to icons? They are there... Path issue? Prob not issue with actual file but can check

- Calculations and column stat type -- have user define what kind of stat it is (to make calculation in footer proedictable and logical -- if user wants to add up all the miles per hour, fine, but that can be an override of a sensible defualt)

--> in addition to preventing jumps by taking up space (the focus UI needs this), CONSIDER a simple ANIMATION to show that a field is opening up to be edited and then is closing back down.

icon for logo placement can be just one def with a single class applied to determine fill.

could offer choice to choose text color and then have BG color AUTO adjust per backwards color contrast function along a greyscale or some simplified/lightened version of color picker... ...

can text align left/center/right be bumped to v2?

--> generalize text slider man!

v2: since it makes sense / is necessary to edit text in a focus UI state (this has been reasoned through now fully twice), perhaps the input doesn't have to be INSIDE the h1, h2, and h3... Interesting reversal... This is needed i think... When clicked that field's actual input element could be revealed... (keep in mind though this helps with the focus-UI idea of focus-within... but that might be cheating anyway... gotta think this through...

--> text options include text-align

there are other fonts still (though i'm using this one so thoroughyl...and ascenders/descrender adjustment needed for making 16px look maller to avoid iOS zoom

some font options look kinda frail... plus grade and weight aren't orthogonal... might consider switching here seriously... though later...

--> place for Card Number

--> re-consider icon for color, although unambiguos text really is better

--> can we move delete image(s) option to v2?

- for imperfections, look at the card condition rating service details

-- could offer duotone filter

- bumped logo shape option to v2. RECONISDER: no inspirational card has a square subshape (so 1984)

stats should allow year range like 1997-2009

--> consider logo border option

--> lazyload images (for iOS really) -- safari implemtation in progress! Looks like it's already been implemented in webkit: https://bugs.webkit.org/show_bug.cgi?id=200764

--> avif support?

--> image editing controls (and others) could "take-over" the 1st & 2nd level control area (either via overlay or actual live region)

--> ability to save card easily and load so you can make multiple without losing work

--> consider hashes/routes to preserve the Back-button functionality some users rely on to escape a menu.

--> cutout mode using web worker and a white/black background to transparency process. There are services/plugins (also a chrome api that maybe a node server could use)

--> "classic" vs "modern" defaults.

--> is there a use for requestSubmit()

- if different text fields on front could be different colors (which i think to support full-bleed images, it should be), then we need to tell user we've remembered that color:
  radio: current color (show) vs color particular to this field. Not sure which color field would take priority.

--> but if outer border none then can zero-out inner border options, yah? It's not a great look
--> ok maybe it could be cool to have a full-bleed with inner-border look. But it's kinda meh and it be cleaner if menu were:
Borders: Yes / No (or whatever)
If outer border, then inner border options.

--> test transparent PNGs/webPs -- might need need additional bg color option. Or transparency is v2

--> gum placement and styling options

--> full bleed in v2

--> border-color option in v2 (now it will match text color)

--> was it the right call to change imae size based on border/ no border? Because color vs clear would make that menu super easy

-- consider background opacity option so full bleed cards could still have semi transparent outer border for a possibly interesting visual effect

- de-hackify tab markup (maybe use hidden and then put click handlers that toggle aria stuff. Pretty simple)

--> consider input range diagonal "mountain" behind each indicateing which end is max vs min (it can be confusing when values are negative -- this might help)

-- factor out options API stuff

--> un-nest scss

-- consider ROUTE-BASED defaults like /yoga.html, genealogy.html etc that populate menus and labels with appropriate terminology

--> offer a "100% custom" option -- leaving text blank and hiding logo inner border and choosing full bleed)

Texture move to v2
--> superlatives and shapes
Superlatives may have to wait for round 2
--> "Rookie" or "Single Year" option

--> validate years in pre-flight

--> do we need compiler/full build on prod? i don't think so. I think we only need runtime. So make sure we're not loading more code than we need.

--> Use Vue3 async components and suspense API

--> css content visibilty new chromium property. Could help in chrome even though safari doesnT seem to want it.

- card flip on tab change:
  https://v3.vuejs.org/guide/transitions-overview.html#class-based-animations-transitions
  https://www.smashingmagazine.com/2020/02/magic-flip-cards-common-sizing-problem/
  https://dev.to/dailydevtips1/css-flip-cards-3flc
  https://una.im/CSSgram/

Consider adding double border option

- on back gum and crease need to reach edge of card -- either neg margins or translate or absolute who cares one of those

* CMYK misalign elements? How can i get an image trace of some kind? With canvas? A worker can indeed use canvas, but not in safari :(
* img crop/centering options
* consider building a subsetted version of the font without the undesired axes (is that even a thing?) -- or even offering more than 1 parametric font (in performannt way) -- like a SERIF

* for uploading photo could offer a choice: choose photo OR takeUserFacing. Otherwise I can't seem to express "go to photo roll, but IF user opens camera, have it facing front"
* actually use Typescript :-)
* write a test to ensure focusing an input doesn't cause zoom (doing this with viewport tag not ok and iOS will be ignoring it). can i write a test for ios zoom on input? i'd like to be able to make adjustments and not necessarily have to test manually each time on iphone... i can imagine a scenario i nqhich i get kinda far down the road re formatting and have to back out because iOS zoom

- baseball images in tabs radio buttons
- uneven light fading would be cool
  -- might actually not be that hard to allow landscape front
- consider ridiculing IE11.
  -- consider microformats
  -- can i write a css native grid that wraps and uses min max and clamp maybe? Hmmm. Worth a try, although I do need to pivot back to programming
- if continue to wrestle with layout, i think putting a table next to a textarea, even though they are both inside flex columns inside a flex-row, is asking a lot and requiring maybe too much time/code
- flex-order on back of card? Works like a charm and, on mobile (future portrait back option) it looks nicer. But, on desktop, I don't like how it looks at all. Do we give user that option? Can it look good? Well, big problem is the diagonal overflow of labels. That's not a simple sand-down

-- consider using placeholders and style them exaclty if possible -- makes it easier for user to to type from scratch.
-- Name on back could inherit AS A PLACEHOLDER the value of name on front, so it can be its own field that could be edited on its own without affecting the field on the front. Better and simpler than having user select whether to inherit or not. I'll find an issue maybe, but i like the idea

icons needed:
https://github.com/danklammer/bytesize-icons

- b&w could be moon like dark mode: https://thenounproject.com/darthpier/collection/photo-editor/?i=1949966
- sepia though?
  not sure about this... tiny image previews would indeed be cool-- is there time?

- SAVE! (auto save assuemed? I want a disc dammit)
- SUBMIT! (not airplane please)
- print
- submit
- close (unicode X is ok)
- upload
- picture
- delete
- calendar
- options: https://camo.githubusercontent.com/27571c558459bfce3a07cdd814a6cb25195d46b0/68747470733a2f2f63646e2e7261776769742e636f6d2f64616e6b6c616d6d65722f6279746573697a652d69636f6e732f6d61737465722f646973742f69636f6e732f6f7074696f6e732e737667

- star / flag

grain:

on back, need upload json button

- ensure offline mode tells user they are offline

* refactor resets and global inputs: -- refactor input styling -- too much redundancy. See header.

-- should be only 1 text slider (teleport might be needed): Teleport. https://medium.com/@patelvivek2530/teleport-vue-3s-new-feature-a887fe05fd87 -- feature used to be palled portal

- helper text explaining image specs

* can a worker send the actual image file somewhere, but give back a filename string or something so we can match them up later?

)

STATS TABLE
--> stats: Previous 5 years
(offer previous 10 years but no fact footer)
(offer 10 categories, but no career highlights section)

### Built with

- Vue 3
- Vite
- CSS Grid Module
