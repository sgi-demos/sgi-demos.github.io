// Timeline data for sgi-demos.org/timeline/. One file, plain JavaScript so the
// page works from file:// as well as from the site. Every date is ISO: "1989",
// "1989-10", or "1989-10-02". Where a date is inferred rather than documented,
// the entry says so in its `note`. Sources are listed per item so each claim
// can be checked; README.md has the schema and the evidence rules.
//
// NYC = https://mirrors.nycbug.org/pub/The_Unix_Archive/Unix_Usenet/comp.sys.sgi
// (monthly mbox files of comp.sys.sgi, January 1988 to July 1991).
window.TIMELINE = {

  // ---------------------------------------------------------------------------
  // Eras: the platform generations the demos were written for. Each era is a
  // band across the top of the overview chart and a heading in the timeline.
  // ---------------------------------------------------------------------------
  eras: [
    { id: "gl1", name: "IRIS 1000 series", short: "GL1", start: "1983-11", end: "1985-08",
      os: "GL1 on a graphics terminal, then the IRIS 1400 workstation", cpu: "Motorola 68000",
      windowing: "none: one graphics screen",
      gfx: "GF1 Geometry Engine boards",
      blurb: "SGI's first products: the IRIS 1000 graphics terminal for a host VAX, then the IRIS 1400 workstation. GL1 is the first Graphics Library. Gary Tarolli writes flight here, and dog makes it the first networked 3D game." },
    { id: "gl2", name: "IRIS 2000 and 3000 series", short: "GL2", start: "1985-08", end: "1988-10",
      os: "GL2 releases 2.x to 3.6 (UniSoft UNIX System V)", cpu: "Motorola 68010 and 68020",
      windowing: "MEX, the first IRIS window manager (Rhodes, Haeberli, Hickman, 1985)",
      gfx: "GF2 Geometry Engine, 10 or 12 pipeline stages",
      blurb: "The 68020 IRISes. Paul Haeberli's gifts package ships as source on every machine; Thant Tessman's insect is written for the IRIS 2400. GL2-W3.6 (1987) is the last release for this hardware." },
    { id: "irix3", name: "IRIS 4D and IRIX 3", short: "IRIX 3", start: "1987-03", end: "1991-09",
      os: "4D1-1.0 (1987) through 4D1-3.3.3; \"IRIX\" from 4D1-3.0, 6 October 1988", cpu: "MIPS R2000 and R3000",
      windowing: "MEX through 4D1-2.3; 4Sight (NeWS plus IRIS GL) from 3.0",
      gfx: "Clover1 and Clover2 (Professional IRIS), Eclipse (Personal IRIS), GTX and VGX (PowerSeries)",
      blurb: "The MIPS-based 4D line: Professional IRIS 4D/60 to 4D/85, Personal IRIS 4D/20 and 4D/25, PowerSeries. The golden age of the demo tape: /usr/demos, buttonfly, the .info slides. Most of the demos on exhibit were written or last edited here." },
    { id: "irix4", name: "IRIX 4", short: "IRIX 4", start: "1991-09", end: "1993-03",
      os: "IRIX 4.0 to 4.0.5", cpu: "MIPS R3000 and R4000",
      windowing: "X11R4 with the 4Dwm Motif window manager and the IRIS WorkSpace desktop",
      gfx: "Indigo Entry, XS, Elan; Express; VGX, VGXT, RealityEngine",
      blurb: "Indigo (1991) and Crimson (1992) replace the 4D line. The IRIS GL demos keep shipping; twilight is written; OpenGL and Inventor are announced." },
    { id: "irix5", name: "IRIX 5", short: "IRIX 5", start: "1993-03", end: "1994-08",
      os: "IRIX 5.0 to 5.3 (System V Release 4)", cpu: "MIPS R4000 and R4400",
      windowing: "Indigo Magic desktop on X11 (from 5.1)",
      gfx: "Indy XL and XZ, Indigo2 Extreme, Onyx RealityEngine2",
      blurb: "Indy, Indigo2, Onyx, Challenge. Demos move into their own installable subsystem. Jurassic Park puts fsn on screen in June 1993. Flight 3.4 and the OpenGL Electropaint date from here." },
    { id: "irix6", name: "IRIX 6.0 to 6.4", short: "IRIX 6", start: "1994-08", end: "1998-06",
      os: "IRIX 6.0 to 6.4", cpu: "MIPS R8000 and R10000",
      windowing: "Indigo Magic desktop",
      gfx: "IMPACT, O2 CRM, Octane MXI, InfiniteReality",
      blurb: "64-bit IRIX. O2, Octane, Origin, Onyx2. Performer Town belongs here. The IRIS GL demos are legacy code by now, still on the demo CDs." },
    { id: "irix65", name: "IRIX 6.5", short: "6.5", start: "1998-06", end: "2006-08",
      os: "IRIX 6.5 through 6.5.30", cpu: "MIPS R10000 to R16000",
      windowing: "IRIX Interactive Desktop (Indigo Magic renamed)",
      gfx: "VPro (Octane2, Fuel, Tezro), InfiniteReality, UltimateVision",
      blurb: "The long tail: eight years of quarterly 6.5.x releases, the Electropaint screensaver on every idle screen, buttonfly on the demo CDs. 6.5.30 on 16 August 2006 is the last IRIX." },
    { id: "after", name: "Afterlife", short: "After", start: "2009", end: "2026",
      os: "", cpu: "", windowing: "", gfx: "",
      blurb: "SGI is sold, IRIX support ends, and the demos come back: decompilations, gists, the Alice 4 libgl, and this project." }
  ],

  // ---------------------------------------------------------------------------
  // Events: releases, hardware, and milestones the demos are placed against.
  // kind: os | gl | toolbox | hardware | api | corporate | culture | after
  // chart: short label to draw in the overview chart (events without it are
  //        listed in the timeline only)
  // ---------------------------------------------------------------------------
  events: [
    { id: "sgi-founded", date: "1981-11-09", kind: "corporate", title: "Silicon Graphics incorporated", text: "Jim Clark and his Stanford students form SGI around the Geometry Engine; operations begin in 1982.", sources: ["https://en.wikipedia.org/wiki/Silicon_Graphics"] },
    { id: "iris-1000", date: "1983-11", chart: "IRIS 1000", kind: "hardware", title: "IRIS 1000 graphics terminal", text: "The first product: a Geometry Engine terminal for a host computer, Motorola 68000, GL1.", sources: ["https://en.wikipedia.org/wiki/SGI_IRIS"] },
    { id: "iris-1400", date: "1984", chart: "1400", kind: "hardware", title: "IRIS 1400 workstation", text: "The first standalone IRIS. Flight 1.0 runs here; a 68k executable of it survives.", sources: ["https://en.wikipedia.org/wiki/SGI_IRIS"] },
    { id: "siggraph-84", date: "1984-07", kind: "culture", title: "Networked flight at SIGGRAPH 1984", text: "Flight with XNS multicast play is shown at SIGGRAPH; dog, the dogfight, follows in early 1985.", sources: ["https://en.wikipedia.org/wiki/SGI_Dogfight"] },
    { id: "iris-2000", date: "1985-08", chart: "2000", kind: "hardware", title: "IRIS 2000 series and GL2", text: "68010 IRISes with the GF2 Geometry Engine; GL2 on UniSoft UNIX System V with the MEX window manager.", sources: ["https://en.wikipedia.org/wiki/SGI_IRIS", "http://www.sgistuff.net/software/gl2history/index.html"] },
    { id: "iris-3000", date: "1986", chart: "3000", kind: "hardware", title: "IRIS 3000 series", text: "68020 IRISes, GL2 3.x. Discontinued November 1989.", sources: ["https://en.wikipedia.org/wiki/SGI_IRIS"] },
    { id: "ipo", date: "1986-10", kind: "corporate", title: "SGI goes public", sources: ["https://en.wikipedia.org/wiki/Silicon_Graphics"] },
    { id: "dog-udp", date: "1986", kind: "culture", title: "dog moves to UDP broadcast", text: "Port 5130, sgi-dogfight: by one account the first game to use the Internet Protocol suite.", sources: ["https://en.wikipedia.org/wiki/SGI_Dogfight"] },
    { id: "4d60", date: "1987-03", chart: "4D/60", kind: "hardware", title: "Professional IRIS 4D/60", text: "The first MIPS IRIS (R2000, Clover1 graphics), running 4D1-1.0. The 4D/70 follows in November 1987; the 4D/70GT with Clover2 in 1988.", sources: ["http://www.sgistuff.net/hardware/systems/professional.html"] },
    { id: "gl2-w36", date: "1987", chart: "W3.6", kind: "gl", title: "GL2-W3.6", text: "The last GL2 release for the IRIS 2400/3000 (release notes dated 1987; the surviving Bootstrap System tape was cut 10 May 1989, the Options tape 22 August 1989). It installs /usr/people/gifts as source on every machine: cedit, sunflower, and Haeberli's port library come from here, all dated 20 December 1987 on the tape.", sources: ["https://bitsavers.org/bits/SGI/iris/gl2-w3.6+options.tar.gz", "http://www.bitsavers.org/pdf/sgi/iris/007-3206-010_GL2-W3.6_Release_Notes_1987.pdf"] },
    { id: "iu-1987", date: "1987-05", kind: "culture", title: "IRIS Universe, first issue", text: "SGI's customer magazine lists demos whose source customers can request: insect, dog, flight, radar, shadow, heme, jet, shuttle, robot, surfcar, zshadecar.", sources: ["https://archive.org/details/IrisUniverse1983"] },
    { id: "4d70gt", date: "1988", chart: "70GT", kind: "hardware", title: "4D/70GT and 4D/80GT", text: "Clover2 (GT) graphics: hardware lighting and z-buffer. Ideas and logo are written for it.", sources: ["http://www.sgistuff.net/hardware/systems/professional.html"] },
    { id: "iu-1988", date: "1988-07", kind: "culture", title: "IRIS Universe, summer 1988", text: "The real-time radiosity page: the Barcelona Pavilion model by Dan Baum, Efi Fogel, Dave Ligon, Jim Winget, Ben Garlick, and Rolf Van Widenfeld, shown at SIGGRAPH '88 in Atlanta. The same issue says the User Gifts Library is being ported to the 4D.", sources: ["https://archive.org/details/iris-universe-summer-1988"] },
    { id: "ep-usenet", date: "1988-08-18", kind: "culture", title: "Electropaint posted to comp.sys.sgi", text: "David Tristram posts Panel Library v7, with ep.c, from NASA Ames as a six-part shar, \"for 2400's through the 4D/70GT\".", sources: ["NYC/1988-August.txt.gz"] },
    { id: "irix-30", date: "1988-10-06", chart: "3.0", kind: "os", title: "4D1-3.0: the first IRIX", text: "4Sight windowing (NeWS with IRIS GL and Distributed GL) and the IRIS WorkSpace desktop. /usr/demos is a flat directory.", sources: ["https://ryan.thoryk.com/sgi/irix_versions.html"] },
    { id: "pi-4d20", date: "1988-10-04", chart: "PI", kind: "hardware", title: "Personal IRIS 4D/20 and PowerSeries", text: "Announced together on 4 October 1988: the Eclipse-graphics Personal IRIS, the affordable machine most demo-tape demos were seen on, and the 4D/120 to 4D/240 GTX PowerSeries.", sources: ["http://www.sgistuff.net/hardware/systems/personal.html"] },
    { id: "nda-source", date: "1988-12-06", kind: "culture", title: "Demo source under NDA", text: "Rob Mace, signing as author of arena and GT dog, explains on comp.sys.sgi that IRIS owners get the demo source under a non-disclosure agreement.", sources: ["NYC/1988-December.txt.gz"] },
    { id: "irix-31", date: "1989-04-07", chart: "3.1", kind: "os", title: "4D1-3.1", text: "4Dgifts appears as the eoe2.sw.gifts subsystem, the 4D successor of Haeberli's gifts.", sources: ["https://ryan.thoryk.com/sgi/irix_versions.html", "NYC/1989-January.txt.gz"] },
    { id: "exchange-tape", date: "1989-07-14", kind: "gl", title: "IRIS Software Exchange Release tapes", text: "User Services sells a $100 tape for the 2000/3000 and for the 4D containing the SGI demo source, Electropaint with the Panel Library, and Slidemaker. In July 1990 SGI's Gavin Bell confirms the demos are copyrighted, not public domain, and still $100.", sources: ["NYC/1989-July.txt.gz", "NYC/1990-July.txt.gz"] },
    { id: "demo-tape", date: "1989-10-02", chart: "tape", kind: "gl", title: "IRIS 4D demo tape snapshot", text: "The bitsavers copy of the demo tape (sgidemos.tar.Z) is a tree owned by user aek with files dated 30 November 1988 through 13 June 1989 and directories copied 2 October 1989; the flight directory was touched again on 26 June 1990. It holds 44 demo directories, of which 8 are on exhibit here (arena, bounce, buttonfly, flight, ideas, insect, jello, logo, newave) plus the Panel Library with an early ep.c dated 21 March 1989.", also: ["blast", "blaster", "boing", "c3i", "cine", "cinebw", "closeup", "cube", "demotools", "dragon", "flip", "flyray", "gcut", "house", "ipaint", "laser", "lathe", "light", "liquid", "medical", "mir", "movie", "newton", "robot", "rotimg", "shadows", "siggraph", "snoop", "superbreak", "wave", "west"], sources: ["https://bitsavers.org/bits/SGI/iris/sgidemos.tar.Z"] },
    { id: "irix-32", date: "1989-11", chart: "3.2", kind: "os", title: "4D1-3.2", text: "Release notes posted to comp.sys.sgi on 19 November 1989 (thoryk.com dates the release mid-1989). /usr/demos is reorganized into bin/ and data/ with buttonfly as the front end, every demo gets a man page and an .info slide, and the subsystem is eoe2.sw.demos. New demos: buttonfly, flyray, logo, newton (\"enhanced version of jello\"), gview, house, mir, shadows. Dropped: revolution, jet, spin, superbreak, demomakemap. 4Dgifts becomes a sample login, /usr/people/4Dgifts.", also: ["flyray", "newton", "house", "mir", "shadows", "flip", "boing", "solidview", "lathe", "blast", "cine", "cinebw"], sources: ["NYC/1989-November.txt.gz", "https://ryan.thoryk.com/sgi/irix_versions.html"] },
    { id: "irix-33", date: "1990-06-29", chart: "3.3", kind: "os", title: "4D1-3.3", text: "eoe2.sw.demos installs /usr/demos/bin with about 75 programs, the largest demo set SGI ever shipped in the base OS; dog switches to IP multicast. Of the demos on exhibit: arena, bounce, buttonfly, flight and dog, gview, insect, jello, logo, newave; cedit ships as /usr/sbin/cedit with its source under 4Dgifts (dev.sw.giftssrc).", also: ["atom", "boing", "clock", "closeup", "cube", "cube2h", "curve", "demograph", "dragon", "envmap", "flip", "flyray", "gamma", "hist", "house", "icut", "ipaint", "izoom", "light", "liquid", "mir", "mview", "newton", "revolve", "rotimg", "sbflip", "scrsave", "shadow", "shadows", "showmap", "slides", "snapshot", "snoop", "solidview", "powerflip", "sview", "thermal", "trimnurbs", "walk", "vortex", "wave", "yaodl"], sources: ["https://fsck.technology/software/Silicon%20Graphics/IRIX%20Install%20Media/", "https://ryan.thoryk.com/sgi/irix_versions.html"] },
    { id: "night-usenet", date: "1990-06-06", kind: "culture", title: "\"Twilight Background Program\" posted", text: "Howard Look posts night.c to comp.sys.sgi, a sunset for the 4Sight root window. Within six weeks Trevor Paquette, Reuel Nash, David Tristram, and John Mitchell have added twinkling stars, comets, Venus, and Mars; Paquette's Night 2.29 of 20 July 1990 is the version preserved.", sources: ["NYC/1990-June.txt.gz", "NYC/1990-July.txt.gz"] },
    { id: "ep-binary", date: "1990-09-18", kind: "culture", title: "Electropaint binary on Usenet", text: "Paul Haeberli posts a uuencoded IRIX 3.3 ep as \"Dave Tristram's Electro-Paint Productivity Tool\". Tristram, now at SGI, replies that it has no purposes except the self-evident ones. Guido van Rossum asks how to get it outside the US.", sources: ["NYC/1990-September.txt.gz"] },
    { id: "vgx", date: "1990", chart: "VGX", kind: "hardware", title: "PowerSeries VGX", text: "PowerVision graphics: texture mapping in hardware.", sources: ["http://www.sgistuff.net/hardware/systems/powerseries.html"] },
    { id: "pi-4d35", date: "1991-04", kind: "hardware", title: "Personal IRIS 4D/35", text: "R3000 Personal IRIS; the last of the 4D line.", sources: ["http://www.sgistuff.net/hardware/systems/personal.html"] },
    { id: "indigo", date: "1991-07-22", chart: "Indigo", kind: "hardware", title: "IRIS Indigo", text: "The R3000 Indigo; the first of the IRIX 4 machines. Express graphics (XS, Elan) follow in 1992.", sources: ["https://en.wikipedia.org/wiki/SGI_Indigo"] },
    { id: "irix-40", date: "1991-09", chart: "4.0", kind: "os", title: "IRIX 4.0", text: "X11R4 and 4Dwm replace 4Sight. 4.0.1 (November 1991) still carries the demos in eoe2.sw.moredemos with their .info slides, and cedit's source under 4Dgifts. IRIS GL is opened for licensing to other vendors the same month.", sources: ["https://ryan.thoryk.com/sgi/irix_versions.html"] },
    { id: "toolbox-20", date: "1991", chart: "Tbx 2", kind: "toolbox", title: "Developer Toolbox 2.0", text: "The developer CD that carries flight 2.4 (WINGMAN revision) and flight 3.3 with source.", sources: ["https://github.com/sgi-demos/sgi-demos/tree/main/demos/flight-1994"] },
    { id: "crimson", date: "1992-01-28", kind: "hardware", title: "Crimson and RealityEngine", text: "The R4000 deskside; RealityEngine is the graphics of Jurassic Park's Crimson.", sources: ["https://en.wikipedia.org/wiki/SGI_Crimson"] },
    { id: "mips", date: "1992-06-29", kind: "corporate", title: "SGI acquires MIPS Computer Systems", sources: ["https://www.computerhistory.org/tdih/june/29/"] },
    { id: "opengl-10", date: "1992-06-30", chart: "OpenGL", kind: "api", title: "OpenGL 1.0", text: "IRIS GL's successor, specified by SGI and the Architecture Review Board; the Electropaint screensaver would be rewritten for it.", sources: ["https://en.wikipedia.org/wiki/OpenGL"] },
    { id: "inventor-10", date: "1992-07", kind: "api", title: "IRIS Inventor 1.0", text: "The scene-graph toolkit; Open Inventor 2.0 follows in 1994. IRIS Performer 1.0 for IRIX 4.0.5 dates from the same year.", sources: ["https://en.wikipedia.org/wiki/Open_Inventor", "https://en.wikipedia.org/wiki/OpenGL_Performer"] },
    { id: "pellucid", date: "1992-11", kind: "culture", title: "Flight demos PC 3D at COMDEX", text: "Gary Tarolli, Scott Sellers, and Ross Smith show Pellucid's PC graphics with flight as one of three demos; the same program sells 3dfx to investors in 1994.", sources: ["https://archive.computerhistory.org/resources/access/text/2014/05/102746834-05-01-acc.pdf"] },
    { id: "indigo2", date: "1993-01-26", kind: "hardware", title: "Indigo2, Onyx, and Challenge", text: "R4000 desksides and the RealityEngine2 Onyx.", sources: ["https://en.wikipedia.org/wiki/SGI_Indigo2", "https://en.wikipedia.org/wiki/SGI_Onyx"] },
    { id: "irix-50", date: "1993-03", chart: "5.0", kind: "os", title: "IRIX 5.0", text: "System V Release 4.", sources: ["https://ryan.thoryk.com/sgi/irix_versions.html"] },
    { id: "jurassic", date: "1993-06-11", chart: "JP", kind: "culture", title: "Jurassic Park", text: "\"It's a UNIX system, I know this!\": fsn on a Crimson, SGI's most famous screen appearance.", sources: ["https://en.wikipedia.org/wiki/Fsn"] },
    { id: "indy", date: "1993-07-12", chart: "Indy", kind: "hardware", title: "Indy", text: "R4000 desktop with a camera, shipping with IRIX 5.1 and the Indigo Magic desktop.", sources: ["https://en.wikipedia.org/wiki/SGI_Indy"] },
    { id: "irix-511", date: "1993-09", kind: "os", title: "IRIX 5.1.1", text: "Demos move to their own demos.idb product (demos.sw.visualization and friends) rather than the base eoe2.", sources: [] },
    { id: "irix-52", date: "1994-03", chart: "5.2", kind: "os", title: "IRIX 5.2", sources: ["https://ryan.thoryk.com/sgi/irix_versions.html"] },
    { id: "toolbox-4x", date: "1994", chart: "Tbx 4", kind: "toolbox", title: "Developer Toolbox 4.0, 4.1, 4.2", text: "Flight 3.4 with source, revisions 1.1 and 1.31.", sources: ["https://jrra.zone/sgi/"] },
    { id: "inventor-games", date: "1994", kind: "toolbox", title: "Inventor Games CD", text: "Slotcars, Maze, and eleven other Open Inventor games with source (part 812-0113-001).", sources: ["https://github.com/sgi-demos/sgi-inventor"] },
    { id: "irix-60", date: "1994-08", chart: "6.0", kind: "os", title: "IRIX 6.0", text: "64-bit IRIX for the R8000.", sources: ["https://ryan.thoryk.com/sgi/irix_versions.html"] },
    { id: "irix-53", date: "1994-11", kind: "os", title: "IRIX 5.3", sources: ["https://ryan.thoryk.com/sgi/irix_versions.html"] },
    { id: "irix-61", date: "1995-07", kind: "os", title: "IRIX 6.1", sources: ["https://ryan.thoryk.com/sgi/irix_versions.html"] },
    { id: "irix-62", date: "1996-03", chart: "6.2", kind: "os", title: "IRIX 6.2", text: "The last release with /usr/demos/bin in the package listings the project has examined; demos are optional subsystems on the second CD. Electropaint runs as the screensaver.", sources: ["https://forums.irixnet.org/thread-3539.html"] },
    { id: "cray", date: "1996-06-30", kind: "corporate", title: "SGI acquires Cray Research", sources: ["https://www.hpcwire.com/1996/07/04/silicon-graphics-completes-cray-merger/"] },
    { id: "toolbox-61", date: "1996-08", chart: "Tbx 6.1", kind: "toolbox", title: "Developer Toolbox 6.1", text: "The complete flight 3.4 tree, including the hills terrain grid and texture.", sources: ["https://archive.org/details/SGIDeveloperToolbox61"] },
    { id: "o2", date: "1996-10-07", chart: "O2", kind: "hardware", title: "O2, Origin 2000, Onyx2", text: "Announced together. The O2 case's dark blue is this site's palette. Octane follows on 27 January 1997.", sources: ["https://en.wikipedia.org/wiki/SGI_O2"] },
    { id: "irix-64", date: "1996-11", kind: "os", title: "IRIX 6.3 and 6.4", text: "6.3 (September 1996) for O2, 6.4 (November 1996) for Origin and Octane.", sources: ["https://ryan.thoryk.com/sgi/irix_versions.html"] },
    { id: "flight-win", date: "1997-04-04", chart: "Win", kind: "culture", title: "Flight 3.4.1 for Windows", text: "Michael Gold's port to Windows 95 and NT on Cosmo OpenGL, release 1.01; it could dogfight against IRIS GL flight on a workstation. Binary only.", sources: ["https://notwood.net/sgiflight/"] },
    { id: "peak", date: "1997-06-30", kind: "corporate", title: "Peak revenue", text: "Fiscal 1997: $3.66 billion.", sources: ["https://www.fundinguniverse.com/company-histories/sgi-history/"] },
    { id: "irix-65", date: "1998-06", chart: "6.5", kind: "os", title: "IRIX 6.5", text: "Demos now live on separate General and Platform Demos CDs; buttonfly is still the front end on the 6.5.12 discs. Flight's 6.5 man page credits Rob Mace, Thad Beier, Marc Ondrechen, and Marshall Levine.", sources: ["https://ryan.thoryk.com/sgi/irix_versions.html", "https://jrra.zone/sgi/"] },
    { id: "stonerview", date: "1998", kind: "culture", title: "StonerView", text: "Andrew Plotkin's from-memory Electropaint homage, later in xscreensaver.", sources: ["https://www.eblong.com/zarf/stonerview.html"] },
    { id: "ep-tm", date: "1999-02-06", kind: "culture", title: "ELECTROPAINT trademark filed", text: "David Tristram files the mark (serial 75632551), registered as Tristram Visual.", sources: ["https://trademarks.justia.com/756/32/electropaint-75632551.html"] },
    { id: "oss", date: "1999-08-10", kind: "api", title: "oss.sgi.com", text: "SGI's open-source site opens with XFS; OpenGL's sample implementation follows in January 2000 and Open Inventor under the LGPL on 16 August 2000.", sources: ["https://www.eetimes.com/sgi-begins-releasing-open-source-code/", "https://en.wikipedia.org/wiki/Open_Inventor"] },
    { id: "linux-toolbox", date: "2003-03", chart: "Linux Tbx", kind: "toolbox", title: "Linux Developer Toolbox", text: "Flight 3.4 and libgobj republished under SGI's permissive license: the copy this project builds.", sources: ["https://github.com/sgi-demos/sgi-demos/tree/main/demos/flight-1994"] },
    { id: "irix-6530", date: "2006-08-16", chart: "6.5.30", kind: "os", title: "IRIX 6.5.30", text: "The last IRIX release; MIPS and IRIX end of life is announced on 6 September 2006.", sources: ["https://ryan.thoryk.com/sgi/irix_versions.html"] },
    { id: "rackable", date: "2009-05-11", kind: "corporate", title: "SGI sold to Rackable Systems", text: "After the 1 April 2009 Chapter 11 filing, Rackable takes the SGI name.", sources: ["https://en.wikipedia.org/wiki/Silicon_Graphics_International"] },
    { id: "irix-eos", date: "2013-12", kind: "corporate", title: "IRIX support ends", sources: ["https://en.wikipedia.org/wiki/IRIX"] },
    { id: "electroportis", date: "2014-05-05", kind: "after", title: "ElectroPortis 1.0", text: "Mark Laws (drvink) decompiles the IRIX OpenGL Electropaint binary with epanos, his own MIPS-to-C decompiler; Brendan Shanks's fork makes it portable C.", sources: ["https://github.com/drvink/electroportis"] },
    { id: "twilight-gist", date: "2015-02-10", kind: "after", title: "twilight.c surfaces as a gist", text: "slacy posts Howard Look's twilight source; the copy this project builds.", sources: ["https://gist.github.com/slacy/5ec0b38e8fe4da52f40e"] },
    { id: "alice4", date: "2015-08-01", kind: "after", title: "Alice 4", text: "Brad Grantham and Lawrence Kesteloot start Alice 4 and reimplement IRIS GL for it, porting bounce, insect, jello, logo, and flight; shown at VCF West in August 2017 next to a 1989 Personal IRIS running insect, with Thant Tessman present. sgi-demos forks their libgl.", sources: ["https://lkesteloot.github.io/alice/alice4/libgl.html"] },
    { id: "hpe", date: "2016-11-01", kind: "corporate", title: "Hewlett Packard Enterprise acquires SGI", text: "HPE becomes the rights holder for IRIX, IRIS GL, and the demos.", sources: ["https://en.wikipedia.org/wiki/Silicon_Graphics_International"] },
    { id: "sgi-demos", date: "2023-01-18", kind: "after", title: "sgi-demos begins", text: "This project: the demos compiled from SGI's shipped source over a fresh IRIS GL, native and in the browser.", sources: ["https://github.com/sgi-demos/sgi-demos"] }
  ],

  // ---------------------------------------------------------------------------
  // Keyword taxonomy. Every demo carries a set of these; the page builds the
  // filter chips from this list, grouped, in this order. Keep the ids stable.
  // ---------------------------------------------------------------------------
  keywords: [
    { group: "Behaviour", items: [
      { id: "interactive", label: "interactive", desc: "the user steers it: view, camera, controls" },
      { id: "animated", label: "animated", desc: "moves on its own, frame after frame" },
      { id: "static", label: "static", desc: "draws once and sits there" },
      { id: "attract", label: "attract mode", desc: "runs itself when left alone; screensaver-like" } ] },
    { group: "Kind", items: [
      { id: "simulation", label: "simulation", desc: "a physical or mechanical model driving the picture" },
      { id: "physics", label: "physics", desc: "masses, springs, gravity, collisions" },
      { id: "flight-sim", label: "flight sim", desc: "aircraft, terrain, instruments" },
      { id: "game", label: "game", desc: "something to win or lose" },
      { id: "multiplayer", label: "multiplayer", desc: "networked play over Ethernet" },
      { id: "viewer", label: "viewer", desc: "displays a model or database" },
      { id: "launcher", label: "launcher", desc: "a menu that runs the other demos" },
      { id: "tool", label: "tool", desc: "a utility rather than a show" },
      { id: "background", label: "background", desc: "a root-window backdrop" },
      { id: "screensaver", label: "screensaver", desc: "shipped or used as one" },
      { id: "generative", label: "generative art", desc: "pattern from rules, not a model" },
      { id: "architecture", label: "architecture", desc: "a building" },
      { id: "logo", label: "SGI logo", desc: "the cube appears" } ] },
    { group: "Colour", items: [
      { id: "colormap", label: "colormap", desc: "colour-index mode: a palette of up to 4096 entries, the 8 and 12-bitplane IRIS look" },
      { id: "rgb", label: "RGB", desc: "24-bit true colour (RGBmode)" },
      { id: "colour-cycling", label: "colour cycling", desc: "animates by rewriting the palette (mapcolor)" } ] },
    { group: "Shading", items: [
      { id: "flat", label: "flat", desc: "one colour per polygon" },
      { id: "gouraud", label: "Gouraud", desc: "colour interpolated across the polygon" },
      { id: "hardware-lighting", label: "hardware lighting", desc: "IRIS GL lmdef/lmbind: lights and materials evaluated by the Geometry Engine" },
      { id: "software-lighting", label: "software lighting", desc: "the demo computes its own vertex colours from a light" },
      { id: "radiosity", label: "radiosity", desc: "precomputed global illumination baked into vertex colours" },
      { id: "wireframe", label: "wireframe", desc: "lines and outlines" },
      { id: "halftone", label: "halftone pattern", desc: "setpattern screens: dither, shadows, stipple" },
      { id: "depth-cue", label: "depth cue", desc: "colour fades with distance" },
      { id: "texture", label: "texture", desc: "texture mapping (texdef2d)" },
      { id: "fog", label: "fog", desc: "per-vertex fog (fogvertex)" },
      { id: "blending", label: "alpha blending", desc: "translucency (blendfunction)" },
      { id: "smear", label: "smear and fade", desc: "frames accumulate over the previous frame" } ] },
    { group: "Hidden surface", items: [
      { id: "z-buffer", label: "z-buffer", desc: "hardware depth buffer" },
      { id: "painters", label: "painter's algorithm", desc: "sorted back to front in software" },
      { id: "backface", label: "backface removal", desc: "polygons facing away are dropped" },
      { id: "projected-shadow", label: "projected shadow", desc: "the model redrawn flattened onto the floor" } ] },
    { group: "Technique", items: [
      { id: "double-buffer", label: "double buffered", desc: "draws off screen and swaps" },
      { id: "display-lists", label: "display lists", desc: "makeobj/callobj compiled geometry" },
      { id: "tmesh", label: "triangle mesh", desc: "bgntmesh strips" },
      { id: "overlay", label: "overlay planes", desc: "HUD or text in the overlay bitplanes" },
      { id: "writemask", label: "bitplane masking", desc: "writemask compositing in the colormap planes" },
      { id: "feedback", label: "feedback", desc: "geometry read back from the pipeline" } ] },
    { group: "Input", items: [
      { id: "mouse", label: "mouse", desc: "" },
      { id: "keyboard", label: "keyboard", desc: "" },
      { id: "popup-menu", label: "popup menu", desc: "right-button pup menus (defpup/dopup)" },
      { id: "dials", label: "dials", desc: "the IRIS dial and button box" },
      { id: "spaceball", label: "Spaceball", desc: "" },
      { id: "sound", label: "sound", desc: "" } ] },
    { group: "API", items: [
      { id: "iris-gl", label: "IRIS GL", desc: "" },
      { id: "opengl", label: "OpenGL", desc: "" },
      { id: "panel-library", label: "Panel Library", desc: "Tristram's slider and button toolkit" },
      { id: "performer", label: "Performer", desc: "" },
      { id: "inventor", label: "Inventor", desc: "" } ] }
  ],

  // ---------------------------------------------------------------------------
  // People. Referenced by id from demos[].authors.
  // ---------------------------------------------------------------------------
  people: {
    tarolli:  { name: "Gary Tarolli", note: "One of SGI's first graphics engineers, about ten years at SGI; wrote flight in the summer of 1983. Later Pellucid and, in 1994, co-founder of 3dfx." },
    mace:     { name: "Rob Mace", note: "\"Mr. Flight\": owned flight and dog from the GT version (1988) through 3.4 (1994); wrote arena." },
    tessman:  { name: "Thant Tessman", note: "SGI Technical Marketing 1987 to 1990, then Member of Technical Staff to 1992: insect, jello, logo, and by his own account ideas." },
    ligon:    { name: "David B. Ligon", note: "Added colormap and window handling to insect, August 1988; on the 1988 radiosity team." },
    haeberli: { name: "Paul Haeberli", note: "At SGI from February 1983 to August 1999 (Grafica Obscura); wrote cedit, sunflower, and the port library in 1984, and co-wrote the MEX window manager." },
    tristram: { name: "David A. Tristram", note: "Wrote Electropaint and the Panel Library at NASA Ames from 1986; at SGI by 1990. Tristram Visual holds the Electropaint trademark (filed 1999)." },
    look:     { name: "Howard Look", note: "SGI Customer Support, May 1989 to February 1998: night and twilight. Later TiVo, Pixar, Linden Lab, and Tidepool." },
    olsen:    { name: "Wade Olsen", note: "Wrote buttonfly; later SGI VR and Performer demos (SIGGRAPH '93 with Linda Roy)." },
    sgi:      { name: "Silicon Graphics", note: "Author not recorded in the source." }
  },

  // ---------------------------------------------------------------------------
  // Demos. Fields:
  //   id        directory name in sgi-demos/demos (also thumbnail and run URL)
  //   title     display name
  //   authors   people ids
  //   written   { date, note } when the program was written; the card sits here
  //   edited    { date, note } last known SGI edit, from file dates
  //   shipped   ordered list of SGI channels that carried it: { on, date, how, note }
  //             the lifespan bar runs from the first to the last of these
  //   revived   later, non-SGI republications (gists, decompilations, emulators)
  //   keywords  ids from the taxonomy above
  //   summary   one sentence for the card
  //   history   paragraphs; may contain <a> links
  //   sources   URLs behind the claims above
  //   status    exhibit (runs in the browser) | coming | storage (source only)
  //   thumb, run, source  override the defaults derived from id
  // ---------------------------------------------------------------------------
  demos: [
    { id: "flight-1988", title: "Flight", subtitle: "the 1988 demo-tape flight, version 2.4",
      authors: ["tarolli", "mace"],
      written: { date: "1983-07", note: "Tarolli wrote flight in the summer of 1983; version 1.0 shipped on the IRIS 1400 in 1984; this source is the 1988 to 1989 revision" },
      edited: { date: "1989-02-07", note: "flight.h and uflight.c on the demo tape" },
      shipped: [
        { on: "IRIS 1400", date: "1984", how: "flight 1.0, 68k binary; XNS multicast play at SIGGRAPH 1984", note: "a version 1.0 executable survives; see the archive table" },
        { on: "IRIS 2000 and 3000", date: "1985", how: "flight and dog as shipped demos; dog moves to UDP broadcast in 1986" },
        { on: "IRIX 3.1", date: "1989", how: "two versions, one for the 3000/4D-G/Personal IRIS and one for GT/GTX (Mace, December 1988)" },
        { on: "IRIS 4D demo tape", date: "1989", how: "source, CLOVER1/flight" },
        { on: "IRIX 3.3", date: "1990-06", how: "/usr/demos/bin/flight and dog (eoe2.sw.demos); dog on IP multicast" },
        { on: "Developer Toolbox 2.0", date: "1991", how: "source, WINGMAN revision" } ],
      keywords: ["interactive", "animated", "simulation", "flight-sim", "game", "multiplayer", "colormap", "flat", "backface", "painters", "double-buffer", "display-lists", "halftone", "writemask", "overlay", "keyboard", "mouse", "dials", "iris-gl"],
      summary: "Gary Tarolli's flight simulator in its colormap-mode form: six aircraft, a 1280 by 1024 instrument panel composited in the bitplanes, and dog for Ethernet dogfights.",
      history: [
        "Flight is the oldest program on exhibit and SGI's showpiece almost from the company's founding. Gary Tarolli wrote it in the summer of 1983, inspired by Blue Angels shows over Moffett Field; version 1.0 shipped with the IRIS 1400 in 1984, and that summer SIGGRAPH saw it played over XNS multicast. Dog, the dogfight, followed in early 1985 and moved to UDP broadcast on port 5130 in 1986, which is why the networked-virtual-environment literature calls it the first networked multiplayer 3D game.",
        "The demo-tape source of 1988 to 1989 is the version 2.4 lineage rebuilt for the 4D: colour-index mode, flat shading, a painter's-algorithm depth sort, and meters drawn by masking bitplanes. By then Rob Mace owned the code; Tarolli wrote on comp.sys.sgi in February 1989 that the planes were half real and half there to make dog fun, that the threat cones and HUD were built for Williams Air Force Base, and that airshow recording (dog -o) was meant for flying against yourself. The banner still reads the unsubstituted \"Version vnum\"; this source never numbered itself."
      ],
      sources: ["NYC/1989-February.txt.gz", "NYC/1988-December.txt.gz", "https://en.wikipedia.org/wiki/SGI_Dogfight", "https://bitsavers.org/bits/SGI/iris/sgidemos.tar.Z", "https://github.com/sgi-demos/sgi-demos/issues/4"],
      status: "exhibit" },

    { id: "flight-1994", title: "Flight 3.4", subtitle: "the IRIX flight everyone remembers",
      authors: ["mace", "tarolli"],
      written: { date: "1994", note: "Version 3.4 banner, copyright 1984 to 1994" },
      shipped: [
        { on: "Developer Toolbox 4.0, 4.1, 4.2", date: "1994", how: "source, proprietary legend" },
        { on: "Developer Toolbox 6.1", date: "1996-08", how: "source, the complete tree with hills.grid and hills.t" },
        { on: "Developer Toolbox 6.2a", date: "1997", how: "source" },
        { on: "Windows 95 and NT", date: "1997-04-04", how: "flight 3.4.1 on Cosmo OpenGL, binary only" },
        { on: "IRIX 6.5", date: "1998-06", how: "man page credits the 6.5 version; demo CDs", note: "presence on the 6.5 demo CDs not yet confirmed" },
        { on: "Linux Developer Toolbox", date: "2003-03", how: "source under SGI's permissive license: the copy built here" } ],
      keywords: ["interactive", "animated", "simulation", "flight-sim", "game", "multiplayer", "rgb", "gouraud", "hardware-lighting", "texture", "fog", "blending", "z-buffer", "backface", "double-buffer", "tmesh", "keyboard", "mouse", "dials", "spaceball", "sound", "iris-gl"],
      summary: "Rob Mace's unified flight: RGB with lighting, fog, terrain texture, eight aircraft, a full-width horizon, HUD, and the companions dog, radar, and shadow in one binary.",
      history: [
        "SGI's own README says it: version 3.4 was \"cleaned up, combined into one single version and swankified\" by Rob \"Mr. Flight\" Mace in 1994. The forks merged, the physics went time-based, the terrain got a texture, the sky a scrolling cloud deck, and the aircraft list grew to the Cessna 150, P-38, 747, F-16, F-15, F-14D, F-18, and 727. Its copyright runs 1984 to 1994, the whole life of the program.",
        "It shipped with source in every Developer Toolbox from 1994 on, and SGI republished the same code in its 2003 Linux Toolbox under a permissive license, which is why this version can be redistributed without a fair-use argument. Michael Gold's Windows port of April 1997, 3.4.1 on Cosmo OpenGL, could dogfight against IRIS GL flight on a workstation; it was the last official version."
      ],
      sources: ["https://github.com/sgi-demos/sgi-demos/tree/main/demos/flight-1994", "https://notwood.net/sgiflight/", "https://archive.computerhistory.org/resources/access/text/2014/05/102746834-05-01-acc.pdf"],
      status: "exhibit" },

    { id: "cedit", title: "Cedit", subtitle: "colour editor",
      authors: ["haeberli"],
      written: { date: "1984", note: "author line in the source" },
      edited: { date: "1987-12-20", note: "cedit.c on the GL2-W3.6 tape" },
      shipped: [
        { on: "GL2-W3.6", date: "1987", how: "source in /usr/people/gifts/mextools/tools", note: "the surviving tape of this release was cut 10 May 1989" },
        { on: "IRIX 3.1", date: "1989-04", how: "4Dgifts source (eoe2.sw.gifts)", note: "inferred from the 4Dgifts subsystem existing in 3.1" },
        { on: "IRIX 3.3", date: "1990-06", how: "/usr/sbin/cedit plus 4Dgifts source (dev.sw.giftssrc)" },
        { on: "IRIX 4.0.1", date: "1991-11", how: "/usr/sbin/cedit (eoe2.sw.gltools) plus 4Dgifts source" },
        { on: "IRIX 5.1.1", date: "1993-09", how: "/usr/sbin/cedit (eoe2.sw.gltools)" } ],
      keywords: ["interactive", "static", "tool", "colormap", "mouse", "popup-menu", "iris-gl"],
      summary: "Pick a colormap entry on screen, then adjust it with sliders: the oldest tool on exhibit, and the longest-lived.",
      history: [
        "Paul Haeberli joined SGI in February 1983 and wrote cedit in 1984 on his port library, the toolkit for GL2 tools that also produced the MEX window manager. SGI installed it as source in the gifts package on every IRIS 2400 and 3000. It stayed in the system for a decade: the gifts were ported to the 4D as 4Dgifts by the end of 1988, and cedit was compiled into /usr/sbin on IRIX 3, 4, and 5 with its source alongside. Sunflower, in the same directory, is its 1984 sibling."
      ],
      sources: ["https://bitsavers.org/bits/SGI/iris/gl2-w3.6+options.tar.gz", "https://www.graficaobscura.com/paul/", "NYC/1989-January.txt.gz", "https://github.com/sgi-demos/sgi-demos/tree/main/demos/cedit"],
      status: "exhibit" },

    { id: "sunflower", title: "Sunflower", subtitle: "seed-spiral pattern",
      authors: ["haeberli"],
      written: { date: "1984", note: "author line in the source" },
      edited: { date: "1987-12-20", note: "sunflower.c on the GL2-W3.6 tape" },
      shipped: [
        { on: "GL2-W3.6", date: "1987", how: "source in /usr/people/gifts/mextools/tools", note: "the surviving tape of this release was cut 10 May 1989" } ],
      keywords: ["static", "generative", "colormap", "halftone", "iris-gl"],
      summary: "Circles placed on the sunflower spiral, sized by a growth factor: a 1984 one-file generative sketch.",
      history: [ "A companion of cedit from Haeberli's 1984 gifts tools. Not built yet; the source is in the repository." ],
      sources: ["https://github.com/sgi-demos/sgi-demos/tree/main/demos/sunflower"],
      status: "storage" },

    { id: "insect", title: "Insect", subtitle: "six-legged walker",
      authors: ["tessman", "ligon"],
      written: { date: "1986", note: "\"originally written for the Iris 2400\" per the slide; already offered as source in the spring 1987 IRIS Universe, so 1985 or 1986" },
      edited: { date: "1989-01-11", note: "insect.c on the demo tape; Ligon's colormap and window additions are dated 29 August 1988 in the file" },
      shipped: [
        { on: "IRIS 2400", date: "1986", how: "demo", note: "year inferred; the slide says it was written for the 2400" },
        { on: "IRIS Universe, spring 1987", date: "1987-05", how: "source by request from SGI" },
        { on: "IRIS 4D demo tape", date: "1989", how: "source" },
        { on: "IRIX 3.3", date: "1990-06", how: "/usr/demos/bin/insect (eoe2.sw.demos)" } ],
      keywords: ["interactive", "animated", "simulation", "colormap", "flat", "software-lighting", "painters", "backface", "projected-shadow", "double-buffer", "display-lists", "mouse", "keyboard", "iris-gl"],
      summary: "A joint-motion algorithm for a six-legged walker, drawn with backface removal and a painter's sort, lit once in software, with a matrix-projected shadow.",
      history: [
        "Thant Tessman wrote insect for the 68020 IRIS 2400, before z-buffers were standard: hidden surfaces are handled by sorting and backface removal, and the lighting is computed once at startup. It was already on SGI's list of requestable demo sources in the first IRIS Universe, spring 1987. David Ligon adapted it to the Personal IRIS's 8-bitplane colormap and the 4D window system in August 1988. Left-drag moves the eye, middle-drag reorients, F follows the insect.",
        "In July 1990 a Usenet reader asked whether insect was public domain; SGI's Gavin Bell answered that it was copyrighted and on the $100 User Services tape. Lawrence Kesteloot saw it on an IRIS at the Naval Research Lab in 1989 and ported it to Turbo Pascal; decades later it was the demo the Alice 4 project showed beside a real Personal IRIS, with Tessman in the room."
      ],
      sources: ["https://archive.org/details/IrisUniverse1983", "NYC/1990-July.txt.gz", "https://lkesteloot.github.io/alice/alice4/", "https://bitsavers.org/bits/SGI/iris/sgidemos.tar.Z"],
      status: "exhibit" },

    { id: "logo", title: "Logo", subtitle: "grow a logo",
      authors: ["tessman"],
      written: { date: "1987-07", note: "\"Thant Tessman - July, '87\" in logo.c" },
      edited: { date: "1989-05-10", note: "logo.c on the demo tape" },
      shipped: [
        { on: "IRIS 4D demo tape", date: "1989", how: "source" },
        { on: "IRIX 3.2", date: "1989-11", how: "new in the release notes: \"watch a Silicon Graphics logo being grown\"" },
        { on: "IRIX 3.3", date: "1990-06", how: "/usr/demos/bin/logo (eoe2.sw.demos)" } ],
      keywords: ["interactive", "animated", "logo", "rgb", "hardware-lighting", "z-buffer", "double-buffer", "mouse", "iris-gl"],
      summary: "The SGI cube grown from 1,296 quadrilaterals rebuilt every frame under two hardware lights and a z-buffer.",
      history: [
        "Tessman's July 1987 demo of the two things the new 4D did in hardware: lighting and z-buffering, written in \"three days and much ugly hacking\" in his first months at SGI. The slide makes a point of the object being rebuilt each frame rather than replayed from a display list. Left button restarts the growth, middle-drag reorients."
      ],
      sources: ["https://bitsavers.org/bits/SGI/iris/sgidemos.tar.Z", "NYC/1989-November.txt.gz"],
      status: "exhibit" },

    { id: "jello", title: "Jello", subtitle: "elastic body",
      authors: ["tessman"],
      written: { date: "1987-08", note: "\"Thant Tessman - August, '87\" in jello.c" },
      edited: { date: "1989-01-23", note: "jello.c on the demo tape" },
      shipped: [
        { on: "IRIX 3.1", date: "1989-04", how: "named among the existing demos in the 3.2 release notes" },
        { on: "IRIS 4D demo tape", date: "1989", how: "source" },
        { on: "IRIX 3.3", date: "1990-06", how: "/usr/demos/bin/jello (eoe2.sw.demos), under Application/Scientific_Visualization" } ],
      keywords: ["interactive", "animated", "simulation", "physics", "rgb", "z-buffer", "halftone", "projected-shadow", "double-buffer", "mouse", "popup-menu", "iris-gl"],
      summary: "An icosahedron of 13 masses joined by springs, integrated every frame, dropped into a box with a halftone shadow.",
      history: [
        "The slide prints the integrator: v = v + a dt, p = p + v dt, for each mass. Jello is the demo tape's physics demo; IRIX 3.2 added newton, described in its release notes as an enhanced jello with a catalogue of shapes, which outlived it into IRIX 5. Left button drops it, middle-drag reorients the container."
      ],
      sources: ["https://bitsavers.org/bits/SGI/iris/sgidemos.tar.Z", "NYC/1989-November.txt.gz", "https://lkesteloot.github.io/alice/alice4/"],
      status: "exhibit" },

    { id: "ideas", title: "Ideas in Motion", subtitle: "the lamp and the letters",
      authors: ["tessman"],
      written: { date: "1988", note: "\"written in C for the 4D70/GT\" per the slide; the GT shipped in 1988. No author in the source; Tessman's 2003 biography claims it" },
      edited: { date: "1989-01-11", note: "draw_lamp.c and track.c on the demo tape" },
      shipped: [
        { on: "IRIS 4D demo tape", date: "1989", how: "source" } ],
      keywords: ["animated", "logo", "rgb", "hardware-lighting", "software-lighting", "z-buffer", "tmesh", "projected-shadow", "double-buffer", "iris-gl"],
      summary: "Letters spell ideas on a lit tabletop under a lamp; the logo and lamp are lit in hardware, the spotlight on the table in software, at eight to fourteen frames a second on a 4D/70GT.",
      history: [
        "The slide gives the budget: 2,016 meshed triangles each for the logo and its shadow, 384 for the lamp, about 1,200 for the letters, all lit and moved every frame. It is the demo tape's showpiece animation and needs no input beyond the mouse to quit. No author is named in the source; a 2003 demoparty biography of Thant Tessman lists \"insect, jello, and ideas in motion\" as his. A later OpenGL rewrite of Ideas became a GLUT sample and, in 2012, a glmark2 scene for OpenGL's twentieth anniversary."
      ],
      sources: ["https://bitsavers.org/bits/SGI/iris/sgidemos.tar.Z", "https://demozoo.org/parties/1227/results_file/538/", "https://blueprints.launchpad.net/glmark2/+spec/glmark2-ideas"],
      status: "exhibit" },

    { id: "bounce", title: "Bounce", subtitle: "balls in a wire room",
      authors: ["sgi"],
      written: { date: "1988", note: "inferred: uses the 4D's hardware lighting and z-buffer; the Toolbox 4.0 copy carries a 1988 to 1990 SGI copyright. A GL2 3.7 example named bounce exists in gifts.gl2; the relationship is unchecked" },
      edited: { date: "1989-06-06", note: "bounce.c on the demo tape" },
      shipped: [
        { on: "IRIS 4D demo tape", date: "1989", how: "source" },
        { on: "IRIX 3.3", date: "1990-06", how: "/usr/demos/bin/bounce (eoe2.sw.demos)" },
        { on: "Developer Toolbox 4.0", date: "1994", how: "source, copyright 1988 to 1990" } ],
      keywords: ["interactive", "animated", "simulation", "rgb", "hardware-lighting", "z-buffer", "backface", "tmesh", "double-buffer", "mouse", "popup-menu", "iris-gl"],
      summary: "Three lit, shaded balls bouncing in a cubic room, with a menu of other objects: martini glass, doughnut, VW, X-29, candlestick, SGI logo.",
      history: [
        "No author anywhere. Bounce is the demo the Alice 4 project ported first, and the most adapted source in this collection because of it. The .bin object files are the demo's own model format."
      ],
      sources: ["https://bitsavers.org/bits/SGI/iris/sgidemos.tar.Z", "https://lkesteloot.github.io/alice/alice4/"],
      status: "exhibit" },

    { id: "newave", title: "Newave", subtitle: "wave surface",
      authors: ["sgi"],
      written: { date: "1988", note: "inferred: no date in the source; the tape copy of newave.c is dated 3 January 1989" },
      edited: { date: "1989-01-03", note: "newave.c on the demo tape" },
      shipped: [
        { on: "IRIS 4D demo tape", date: "1989", how: "source" },
        { on: "IRIX 3.3", date: "1990-06", how: "/usr/demos/bin/newave (eoe2.sw.demos)" } ],
      keywords: ["interactive", "animated", "simulation", "colormap", "colour-cycling", "depth-cue", "z-buffer", "double-buffer", "mouse", "popup-menu", "iris-gl"],
      summary: "A wave on a grid under a spinning light, depth-cued through the colormap; you edit the mesh by hand, then set it going.",
      history: [ "Nothing on the tape names an author or a machine. The wave starts flat: right-click, edit, pull a point up, then go." ],
      sources: ["https://bitsavers.org/bits/SGI/iris/sgidemos.tar.Z"],
      status: "exhibit" },

    { id: "arena", title: "Arena", subtitle: "a future sport",
      authors: ["mace"],
      written: { date: "1988", note: "arena's UDP port is in a November 1988 /etc/services thread; most tape sources are dated 2 December 1988" },
      edited: { date: "1989-02-03", note: "arena.info on the demo tape" },
      shipped: [
        { on: "IRIX 3.1", date: "1989", how: "demo; source under NDA (Mace, December 1988)" },
        { on: "IRIS 4D demo tape", date: "1989", how: "source" },
        { on: "IRIX 3.3", date: "1990-06", how: "/usr/demos/bin/arena (eoe2.sw.demos)" } ],
      keywords: ["interactive", "animated", "game", "multiplayer", "colormap", "flat", "backface", "display-lists", "writemask", "halftone", "feedback", "double-buffer", "mouse", "keyboard", "iris-gl"],
      summary: "Mech combat in a maze, drawn in colour-index mode with display lists, with multi-player play over Ethernet (-n).",
      history: [ "\"Simulates a future sport\" is all the slide says. Rob Mace signed a December 1988 comp.sys.sgi post as the author of arena and GT dog, and explained the next day that both use UDP broadcast (arena on port 5131) and that the broadcasts could halt a VAX on the same wire. Arena draws only what it needs to, in flat-shaded colour index. No network play in the port yet." ],
      sources: ["NYC/1988-December.txt.gz", "NYC/1988-November.txt.gz", "https://bitsavers.org/bits/SGI/iris/sgidemos.tar.Z"],
      status: "exhibit" },

    { id: "buttonfly", title: "Buttonfly", subtitle: "the demo launcher",
      authors: ["olsen"],
      written: { date: "1988-12", note: "data.old.h on the tape is dated 7 December 1988, the earliest buttonfly file after the bulk import" },
      edited: { date: "1989-03-14", note: "y.tab.h on the demo tape" },
      shipped: [
        { on: "IRIS 4D demo tape", date: "1989", how: "source" },
        { on: "IRIX 3.2", date: "1989-11", how: "\"new with the IRIX 3.2 release\": the front end of the reorganized /usr/demos" },
        { on: "IRIX 3.3", date: "1990-06", how: "/usr/demos/bin/buttonfly (eoe2.sw.demos)" },
        { on: "IRIX 6.2 demo CD", date: "1996", how: "demo front end" },
        { on: "IRIX 6.5.12 General and Platform Demos CDs", date: "2001", how: "demo front end" } ],
      keywords: ["interactive", "animated", "launcher", "rgb", "flat", "hardware-lighting", "backface", "double-buffer", "mouse", "keyboard", "popup-menu", "iris-gl"],
      summary: "A user-configurable hierarchical menu of 3D buttons: blue ones run a command, purple ones tumble to reveal another set.",
      history: [ "Wade Olsen's buttonfly became the front door of /usr/demos with IRIX 3.2 and stayed there for the rest of IRIX's life, on the 6.5 demo CDs a decade later; its menu files launched every other demo, and the right-button popup showed each demo's .info slide and man page. Nintendo's designers are said to have had it in mind for the Super Mario 64 menu. It is the front page of sgi-demos.org for the same reason." ],
      sources: ["NYC/1989-November.txt.gz", "https://jrra.zone/sgi/", "https://www.nintendolife.com/news/2018/10/random_super_mario_64s_main_menu_was_apparently_based_on_a_silicon_graphics_software_package", "https://bitsavers.org/bits/SGI/iris/sgidemos.tar.Z"],
      status: "exhibit" },

    { id: "gview", title: "Gview", subtitle: "the Barcelona Pavilion",
      authors: ["sgi"],
      written: { date: "1988", note: "the radiosity project was shown at SIGGRAPH '88 and written up in the summer 1988 IRIS Universe; the viewer is first listed in IRIX 3.2" },
      shipped: [
        { on: "IRIX 3.2", date: "1989-11", how: "new in the release notes: \"display the results of radiosity calculations\"; binary only, not on the demo tape" },
        { on: "IRIX 3.3", date: "1990-06", how: "/usr/demos/bin/gview (eoe2.sw.demos); man page dated April 1990" } ],
      keywords: ["interactive", "animated", "viewer", "architecture", "radiosity", "rgb", "gouraud", "hardware-lighting", "z-buffer", "depth-cue", "overlay", "double-buffer", "mouse", "popup-menu", "iris-gl"],
      summary: "A viewer for GFO radiosity databases: Mies van der Rohe's 1929 German Pavilion in 2,676 Gouraud-shaded polygons, and a sphere room of 1,072.",
      history: [
        "No source survives; gview.c was reconstructed from the IRIX 3 executable. The pavilion was dismantled after the 1929 exposition and rebuilt in Barcelona in 1986. SGI's radiosity team, Dan Baum, Efi Fogel, Dave Ligon, Jim Winget, Ben Garlick, and Rolf Van Widenfeld, solved it on a multiprocessor PowerSeries, showed it at SIGGRAPH '88 in Atlanta, and published the method in 1989 and 1990. The program does no radiosity itself: it displays the precomputed vertex colours. Fly-through and turntable modes work in the port."
      ],
      sources: ["https://archive.org/details/iris-universe-summer-1988", "NYC/1989-November.txt.gz", "https://github.com/sgi-demos/sgi-demos/tree/main/demos/gview"],
      status: "exhibit" },

    { id: "ep-1988", title: "Electropaint 1988", subtitle: "Panel Library v7",
      authors: ["tristram"],
      written: { date: "1986", note: "Tristram's copyright reads 1986; this is the v7 source of August 1988" },
      edited: { date: "1988-08-18", note: "posted to comp.sys.sgi" },
      shipped: [
        { on: "comp.sys.sgi", date: "1988-08-18", how: "six-part shar from NASA Ames, \"for 2400's through the 4D/70GT\"" },
        { on: "IRIS 4D demo tape", date: "1989-03-21", how: "panel/ep.c, an earlier pre-Modslider revision" },
        { on: "IRIS Software Exchange tape", date: "1989-07", how: "\"Electro-Paint/Panel Library\" on the $100 User Services tape" } ],
      keywords: ["animated", "attract", "generative", "screensaver", "colormap", "colour-cycling", "flat", "wireframe", "halftone", "smear", "z-buffer", "double-buffer", "tmesh", "keyboard", "iris-gl", "panel-library"],
      summary: "The earliest Electropaint: four mirrored copies of a triangle stream steered by plain sliders, in colour-index mode.",
      history: [
        "David Tristram wrote Electropaint at NASA Ames as the demo for his Panel Library, a slider-and-button toolkit for IRIS GL, and gave it away on Usenet on 18 August 1988. The v7 sliders have no motion of their own, so the port drives them with slow oscillators. Every file carries his notice: public domain, may not be resold or relicensed."
      ],
      sources: ["NYC/1988-August.txt.gz", "NYC/1989-July.txt.gz"],
      status: "exhibit" },

    { id: "ep-1989", title: "Electropaint 1989", subtitle: "Panel Library 9.6",
      authors: ["tristram"],
      written: { date: "1989-04", note: "the new Panel Library release was announced on comp.sys.sgi on 24 March 1989 for shipment in April" },
      shipped: [
        { on: "Panel Library 9.6", date: "1989-04", how: "source on request from NASA Ames (panel-request@nas.nasa.gov); a pristine copy survives in GRASS 4.3" },
        { on: "comp.sys.sgi", date: "1990-09-18", how: "IRIX 3.3 binary posted by Paul Haeberli" },
        { on: "NASA Tech Briefs", date: "1992", how: "Panel Library 9.8 and Editor 1.1, by Eric Raible, David Tristram, and Pam Walatka" } ],
      revived: [
        { on: "IGL 0.1.8", date: "2006", how: "the IRIS GL emulator for Linux and Windows ships it as its demo app; the copy built here, with IGL's patches" } ],
      keywords: ["animated", "attract", "generative", "screensaver", "colormap", "colour-cycling", "rgb", "hardware-lighting", "flat", "wireframe", "halftone", "smear", "blending", "z-buffer", "double-buffer", "tmesh", "keyboard", "iris-gl", "panel-library"],
      summary: "The mature IRIS GL Electropaint: self-animating Modsliders, the mirror-fold ribbons, and an RGB lighting path for the GT; driven here by Tristram's authentic default script.",
      history: [
        "The March 1989 Panel Library release added the bevelled 3D look, menus, and a Control Panel Editor, and this ep.c with it. By mid-1990 Tristram had moved from NASA to SGI, and in September 1990 Paul Haeberli posted a prebuilt IRIX 3.3 binary to comp.sys.sgi as \"Dave Tristram's Electro-Paint Productivity Tool\", producing a flurry of \"it just sits there\" replies and Tristram's own statement that it has no purposes except the self-evident ones. This version is the one that spread: it turns up in the GRASS GIS source tree and in IGL, the IRIS GL emulator for Linux and Windows. The port runs the geometry choreography of Tristram's default script, recovered from the 1994 screensaver, in colour-index mode."
      ],
      sources: ["NYC/1989-March.txt.gz", "NYC/1990-September.txt.gz", "https://ntrs.nasa.gov/search.jsp?R=19920000697", "https://github.com/sgi-demos/igl"],
      status: "exhibit" },

    { id: "ep-1994-ogl-decomp", title: "Electropaint 1994", subtitle: "the OpenGL screensaver, decompiled",
      authors: ["tristram"],
      written: { date: "1994", note: "OpenGL rewrite for IRIX; the year is inferred from the binary's era and is not yet documented by a primary source" },
      shipped: [
        { on: "IRIX 5.3 or 6.x", date: "1994", how: "screensaver binary, /usr/lib/desktop", note: "first release not established; one unverified source says 5.3" },
        { on: "IRIX 6.2", date: "1996-03", how: "seen running as the screensaver on an Indy" },
        { on: "IRIX 6.5.30", date: "2006-08", how: "among the 6.5 screensavers; presumed shipped to the end" } ],
      revived: [
        { on: "ElectroPortis", date: "2014-05-05", how: "decompiled to C by drvink with epanos, distributed with Tristram's permission; Brendan Shanks's fork is the copy built here" } ],
      keywords: ["animated", "attract", "generative", "screensaver", "rgb", "flat", "wireframe", "smear", "keyboard", "opengl"],
      summary: "The Electropaint that ran on every idle IRIX screen: the famous default script with smooth HLS colour, recovered by decompiling the MIPS binary.",
      history: [
        "Tristram rewrote Electropaint for OpenGL as the IRIX screensaver, and it wasn't quite the same afterwards: the rewrite lost the four-fold mirrors and shipped with an inverted 60-degree camera. It is the version everyone remembers from Indy and O2-era IRIX, and it stayed through 6.5. Mark Laws (drvink) decompiled the binary in 2014 with a purpose-built MIPS decompiler; Brendan Shanks made the output portable C. The port renders it through an IRIS GL shim, and the M key switches between the shipped 1994 look and the IRIS-faithful one.",
        "Its footprint runs from Andrew Plotkin's StonerView (1998), written from memory and later in xscreensaver, through elektropaintjs and macOS wrappers, to the trademark Tristram filed in 1999. The companion demo, Electropaint 1994 (reversed), is the same program with the decompiler's mangled names replaced by readable ones, byte-identical in output."
      ],
      sources: ["https://github.com/drvink/electroportis", "https://www.jwz.org/blog/2019/06/irix-6-5-screen-savers/", "https://www.eblong.com/zarf/stonerview.html", "https://github.com/sgi-demos/sgi-demos/tree/main/demos/ep-1994-ogl-decomp"],
      status: "exhibit" },

    { id: "night", title: "Night", subtitle: "sunset background",
      authors: ["look"],
      written: { date: "1990-04-13", note: "the date in Look's source comment, per his December 1990 repost" },
      shipped: [
        { on: "comp.sys.sgi", date: "1990-06-06", how: "night.c posted as \"Twilight Background Program\"; Night 2.29 by 20 July 1990" } ],
      keywords: ["static", "background", "rgb", "gouraud", "wireframe", "iris-gl"],
      summary: "Howard Look's sunset: a Gouraud gradient sky with a horizon line, the precursor of twilight.",
      history: [ "Look, in SGI Customer Support, posted a sixty-line \"way cool background\" for the 4Sight root window on 6 June 1990, needing 24 bitplanes. Within six weeks a Calgary sysadmin, Trevor Paquette, was maintaining version 2.29 with twinkling stars, Mars, and comets from Reuel Nash, and Venus and the screen aspect ratio from David Tristram of Electropaint (26 June 1990). Look reposted it that December as an imakebackground example. Version 2.29 is in the repository, not yet built." ],
      sources: ["NYC/1990-June.txt.gz", "NYC/1990-July.txt.gz", "NYC/1990-December.txt.gz", "https://gist.github.com/sgi-demos/f90c37b0ae2bc1cdbf22e67196c3e4dc", "https://forums.irixnet.org/thread-3880.html"],
      status: "storage" },

    { id: "twilight", title: "Twilight", subtitle: "the twilight sky",
      authors: ["look"],
      written: { date: "1991", note: "copyright 1991, 1992 in the file" },
      shipped: [
        { on: "SGI, 1991 to 1992", date: "1991", how: "source under SGI's permissive license; the distribution channel (4Dgifts or a backgrounds package) is not yet established" } ],
      revived: [
        { on: "GitHub gist", date: "2015-02-10", how: "slacy posts twilight.c; the copy built here" } ],
      keywords: ["static", "background", "rgb", "gouraud", "halftone", "iris-gl"],
      summary: "A root-window background: a colour gradient with 2,500 small stars and a scattering of large ones.",
      history: [ "Twilight is night grown up: a proper SGI copyright, a permissive license, RGB and colormap paths, and a starfield. Its use at SGI was as a desktop background chosen from the Windows toolchest, not a demo backdrop. It is the one static picture on exhibit, and the demo that shows what an IRIS desktop looked like before you started anything." ],
      sources: ["https://gist.github.com/slacy/5ec0b38e8fe4da52f40e", "NYC/1990-June.txt.gz", "https://forums.irixnet.org/thread-3880.html"],
      status: "exhibit" },

    { id: "webfly", title: "Performer Town", subtitle: "perfly over an OpenSceneGraph Performer",
      authors: ["sgi"],
      written: { date: "1993", note: "IRIS Performer 1.x and its Town database; the vendored copy is Performer 3.0 (2002)" },
      shipped: [
        { on: "IRIS Performer 1.x", date: "1993", how: "sample program and database" },
        { on: "OpenGL Performer 3.0 for Windows", date: "2002-12-10", how: "the copy built here" } ],
      keywords: ["interactive", "animated", "viewer", "rgb", "gouraud", "hardware-lighting", "texture", "fog", "z-buffer", "mouse", "keyboard", "opengl", "performer"],
      summary: "SGI's perfly compiled unmodified over a Performer API reimplemented on OpenSceneGraph: a textured town to fly through.",
      history: [ "Work in progress in the sgi-performer repository." ],
      sources: ["https://github.com/sgi-demos/sgi-performer"],
      run: "../sgi-performer/web/apps/webfly/web/",
      source: "https://github.com/sgi-demos/sgi-performer/tree/main/web/apps/webfly",
      thumb: "https://sgi-demos.org/sgi-performer/media/webfly.png",
      status: "exhibit" },

    { id: "inventor-games", title: "Slotcars and Maze", subtitle: "Inventor Games CD",
      authors: ["sgi"],
      written: { date: "1994", note: "Inventor Games CD" },
      shipped: [ { on: "Inventor Games CD", date: "1994", how: "C++ source and models" } ],
      keywords: ["interactive", "animated", "game", "rgb", "gouraud", "hardware-lighting", "texture", "z-buffer", "mouse", "keyboard", "opengl", "inventor"],
      summary: "Two of the thirteen Open Inventor games SGI shipped with source in 1994; coming to the exhibit from the sgi-inventor repository.",
      history: [],
      sources: ["https://github.com/sgi-demos/sgi-inventor"],
      source: "https://github.com/sgi-demos/sgi-inventor",
      status: "coming" }
  ]
};
