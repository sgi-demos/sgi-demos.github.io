# Timeline

[sgi-demos.org/timeline/](https://sgi-demos.org/timeline/): every demo on exhibit placed against the SGI machines, operating systems, and graphics libraries it was written for, from flight on the IRIS 1400 to the last IRIX in 2006 and the demos' return.

The page is one HTML file and one data file. `data.js` holds everything the page shows; `index.html` only lays it out. Nothing is fetched at runtime except the thumbnails, so the page works from a local checkout as well as from the site.

## What the page shows

- **Lifespan chart** at the top: a horizontal overview. Era bands, ticks for OS releases, toolboxes, and hardware, then one row per demo with a bar from the first SGI channel that carried it to the last, a diamond at the year it was written, and a dotted lead between the two; an arrow at the row's end means the bar runs past 2007. Later republications by others (an emulator, a decompilation, a gist) are listed on the demo's card, not drawn. Years run along the top and bottom. Every bar and tick is a link into the vertical timeline. A lighter bar means the end date is an inference.
- **Keyword filters**: chips built from the taxonomy in `data.js`, grouped (behaviour, kind, colour, shading, hidden surface, technique, input, API). Selecting several narrows to demos that carry all of them. Non-matching demos fade rather than disappear, so the timeline keeps its shape. The search box matches titles, people, history, and keywords. Filters go into the URL (`?k=interactive,colormap&q=tessman`) so a filtered view can be linked.
- **Vertical timeline** by era, then by year: era headings carry the system, windowing, CPU, and graphics of the period; each year lists its events (releases, hardware, corporate and cultural milestones, Usenet moments) and the demo cards written that year. A demo card has the thumbnail (click to run), authors with a hover note, the written and last-edited dates with the evidence behind them, the list of SGI channels that shipped it, later revivals, its keywords (click to filter), history paragraphs, and sources.

## Layout: why vertical, with a horizontal overview

Vertical scrolling is the primary layout because it reads like a document, works on phones, gives each demo room for a thumbnail and a paragraph, and handles the uneven density of the material (twenty years with most demos written in 1987 to 1989, then a long quiet tail). A purely horizontal timeline looks like a museum wall but fights the browser: trackpads and touch scroll vertically, thumbnails get cramped, and the 1988 cluster would need most of the width. The compromise is the lifespan chart, which gives the wall-timeline view of who overlapped whom in one screen and jumps into the detail below.

## Data model (`data.js`)

`window.TIMELINE` has five parts:

| Part | What it holds |
|---|---|
| `eras` | Platform generations: id, name, `start`/`end`, system, windowing, CPU, graphics, a blurb. Each era is a chart band and a timeline section. |
| `events` | Dated milestones: `kind` (os, gl, toolbox, api, hardware, corporate, culture, after), title, text, optional `chart` label for the overview, optional `also` (other demos in that release), sources. |
| `keywords` | The taxonomy the filter chips come from, grouped, each with a one-line description shown on hover. |
| `people` | Authors by id, with a note shown on hover. |
| `demos` | One entry per demo: `written` and `edited` dates each with a `note` giving the evidence, `shipped` (SGI channels, in order; the lifespan bar runs from first to last), `revived` (later republications: gists, decompilations, emulators), `keywords`, `summary`, `history` paragraphs, `sources`, `status` (exhibit, coming, storage). |

Dates are ISO strings at whatever precision the evidence supports: `1987`, `1989-11`, `1988-08-18`. A `note` on a date says where it comes from or that it is inferred. 
A demo's `sources` is an ordered list, each a URL or `{ url, label }`; the page numbers them and shows them open under the history. A `[3]` in a history paragraph is a citation of the third source and renders as a superscript link to it. Every claim a reader might question should carry one; a paragraph without a marker is the project's own description of what the program does. Sources beginning `NYC/` point into the nycbug mirror of the comp.sys.sgi monthly archives.

## Evidence rules

- A date without a note is documented (file timestamp on an archived tape, author line in the source, dated Usenet post, release notes, magazine).
- An inferred date says so in its note and, for a demo's last shipping channel, makes the chart bar lighter.
- "Shipped by SGI" means an SGI channel: a demo tape, an IRIX release, a Developer Toolbox, the gifts package, a Windows port SGI published. Usenet postings by SGI staff count as a channel only when the post is the demo's actual distribution (night, the Electropaint binary). Later community republications go under `revived`.
- Where the repository's own READMEs and this data disagree, this data is the newer research and the READMEs should be brought up to it (see below).

## Placards

Each demo page carries a gallery placard, the label beside the exhibit. It lives in the sgi-demos repository, not here, but it is the other half of this timeline: the placard's year links to the demo's entry on this page (`#demo-<id>`), and the two share their facts.

**What it shows.** The title; the author line, with the year as the link to the timeline, followed by the API with its toolkit, then the framebuffer in one breath: colour mode, depth, "Z" when it is z-buffered, and single or double buffer ("Thant Tessman, 1987 · IRIS GL · RGB, 24-bit, Z, double buffer"), and on the right of the same line the mid-range and high-end SGI machine families of the year ("IRIS 2400 · IRIS 3130"); a two-sentence blurb; the inputs the demo listens for, drawn as a three-button mouse with the used buttons lit, "drag" when it reads mouse motion, then the keys, comma separated, lower case for named keys (esc, shift, arrow keys) and upper case for letters, then keypad, dial box, or spaceball; and a source link to the demo's directory on GitHub.

**Where it comes from.** `demos/<name>/placard.json` holds the text: `title`, `author`, `year`, `color`, `depth`, `buffering`, `hidden`, `api`, `machines`, `blurb`, an optional `port` (what this port does and doesn't do yet, shown under the blurb), `source`, `browse`, `more` (the timeline URL), and `inputs_detected`. The same files feed the browse page's titles and author lines and the README's Working demos grid (scripts/readme_demos.py in sgi-demos), so the four never disagree. A hand-written `inputs` list overrides the detected one. Authors are named alone; "Unattributed" where the source records none; a non-SGI origin is stated (David A. Tristram, NASA Ames).

**Detected inputs.** `scripts/placard.py scan` reads a demo's sources for the IRIS GL event calls (qdevice, getbutton, getvaluator), the character literals a KEYBD demo compares against, and Panel Library actuator keys, and reports what exists, not what it does. `update` writes the result into every placard.json. Motion is reported as drag because the demos read it to steer while a button is held, and a plain move can't be told apart statically. Flight 3.4's list is long and honest; a curated `inputs` is the intended fix.

**On the web.** `demos/placard.js`, included by every demo page with one script tag, reads the JSON and draws the card at the lower left, 20 px from the left and bottom edges. On a first visit only the small ⓘ box shows; Tab or a click on it brings the card up, minimized to its title, author, framebuffer, and machine lines, and it is as wide as its longest line when open (a `LAYOUT` constant keeps two alternatives: a full-width strip, and the earlier 420 px card). It keeps keyboard focus on the canvas so the demo's keys work at once, and suppresses the focus ring that makes visible. Controls: the minus shrinks the card to its title and author line, the plus restores it, the × closes it; Tab toggles closed and shown, Shift+Tab steps open, minimized, closed, and around again, so the card can be run without the mouse. Tab is used because no demo listens for it; both keys are swallowed before SDL sees them. While closed, a small boxed "tab for info" sits in the corner and also reopens the card on click. The state (open, minimized, closed) and the last visible shape persist in localStorage across every demo and visit; `?placard=0` starts one page clean without touching that, `?placard=1` reopens and stays open, and `?placard=25` closes the card after 25 seconds. The site's front page loads buttonfly from an absolute URL and names the demo with `data-demo="buttonfly"` on the script tag.

**Natively.** `make` turns placard.json into a small C file (`bin/placard.c`) whose constructor prints the placard to the terminal before `main`, unless `SGI_PLACARD=0`. libgl knows nothing of it. An in-window overlay for native builds was considered and left out: it would need a text path in the SDL present layer, and the terminal print gives the same information without touching the rasterizers.

## Open items

- **Last release per demo.** The weakest column. The project has package listings (`*.idb`) for IRIX 3.3, 4.0.1, and 5.1.1 only in part, and none for 5.2 to 6.5; reading every release's listings will fix the end of each bar. The user has the IDB files for every release and will supply them.
- **Flight's early years.** The 1983 origin, the Blue Angels, the 1984 SIGGRAPH showing over XNS, dog in 1985, and the 1986 move to UDP are all told by Singhal and Zyda's Networked Virtual Environments (1999), which the project has seen only through Wikipedia; they are left out until the book is read and can be cited to a page. What stands is Tarolli's own 1989 post, the 1984 binary, the 1987 IRIS Universe listing, and Mace's 1988 posts.
- **Electropaint 1994.** The OpenGL rewrite's year and first IRIX release are not yet documented by a primary source.
- **Twilight's channel.** The 1991 to 1992 SGI copyright and permissive notice suggest an official sample (4Dgifts or a backgrounds package), but no posting or package has been found.
- **Ideas' author.** The only attribution is Thant Tessman's 2003 demoparty biography.
- **Bounce's ancestry.** GL2 3.7's gifts.gl2 has a `bounce.c`; whether the 4D demo descends from it is unchecked.
- **Corrections owed to sgi-demos READMEs and COPYRIGHT.md**, found while researching this page: arena's author is Rob Mace (comp.sys.sgi, 6 December 1988); GL2-W3.6 is a 1987 release whose surviving tape was cut 10 May 1989, not a May 1989 release; ElectroPortis dates from May 2014, not 2018; insect was offered as source in the spring 1987 IRIS Universe; gview was never on the demo tape and is first listed in IRIX 3.2.

## Machine photographs

`media/machines/` holds a photograph of each machine the page can show, all from Wikimedia Commons at 480 pixels, with `credits.md` listing the Commons file, photographer, and licence for each and `credits.json` feeding the `photos` block in `data.js`. An era or event names its picture with a `photo` key; the page shows the credit on hover and links the picture to its Commons page. No free photograph was found for the IRIS 1000 to 3000, the PowerSeries, or the Crimson; those are listed as wanted in credits.md.

## Regenerating thumbnails

Thumbnails are `media/<demo>.png` in the sgi-demos repository, made by `make thumbs` there. This page loads them by absolute URL, the same as `../browse/`.
