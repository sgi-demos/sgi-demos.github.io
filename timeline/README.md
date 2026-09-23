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
- Where the repository's own READMEs and this data disagree, this data is the newer research and the READMEs should be brought up to it.

## Placards

Each demo page carries a gallery placard, the label beside the exhibit. It lives in the sgi-demos repository (`demos/<name>/placard.json`, whose fields `scripts/placard.py` documents, drawn by `demos/placard.js`), and it shares its facts with this page: the placard's year links to the demo's entry here (`#demo-<id>`).

## Open items

- **Last release per demo.** The weakest column. The page so far draws on package listings (`*.idb`) for IRIX 3.3, 4.0.1, and 5.1.1 only in part, and none for 5.2 to 6.5; the listings for every release exist, and reading them will fix the end of each bar.
- **Flight's early years.** The 1983 origin, the Blue Angels, the 1984 SIGGRAPH showing over XNS, dog in 1985, and the 1986 move to UDP are all told by Singhal and Zyda's Networked Virtual Environments (1999), which the project has seen only through Wikipedia; they are left out until the book is read and can be cited to a page. What stands is Tarolli's own 1989 post, the 1984 binary, the 1987 IRIS Universe listing, and Mace's 1988 posts.
- **Electropaint 1994.** The OpenGL rewrite's year and first IRIX release are not yet documented by a primary source.
- **Twilight's channel.** The 1991 to 1992 SGI copyright and permissive notice suggest an official sample (4Dgifts or a backgrounds package), but no posting or package has been found.
- **Ideas' author.** The only attribution is Thant Tessman's 2003 demoparty biography.
- **Bounce's ancestry.** GL2 3.7's gifts.gl2 has a `bounce.c`; whether the 4D demo descends from it is unchecked.

## Machine photographs

`media/machines/` holds a photograph of each machine the page can show, all from Wikimedia Commons, with `credits.md` listing the Commons file, photographer, and licence for each and `credits.json` feeding the `photos` block in `data.js`. An era or event names its picture with a `photo` key; the page shows the credit on hover and links the picture to its Commons page. No free photograph was found for the IRIS 1000 to 3000, the PowerSeries, or the Crimson; those are listed as wanted in credits.md.

## Regenerating thumbnails

Thumbnails are `media/<demo>.png` in the sgi-demos repository, made by `make thumbs` there. This page loads them by absolute URL, the same as `../browse/`.
