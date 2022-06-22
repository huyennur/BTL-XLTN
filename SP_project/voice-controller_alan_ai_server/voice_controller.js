intent("(open|view) (the|) social news", p => {
    p.play("Opening the social news");
    p.play({ command: 'social-new' });
});

intent("(open|view) (the|) sport news", p => {
    p.play("Opening the sport news");
    p.play({ command: 'sport-new' });
});

intent("(open|view) (the|) world news", p => {
    p.play("Opening the world news");
    p.play({ command: 'world-new' });
});

intent("(open|view) (the|) sport news", p => {
    p.play("Opening the sport news");
    p.play({ command: 'sport-new' });
});

intent("(open|view) (the|) politics news", p => {
    p.play("Opening the politics news");
    p.play({ command: 'politics-new' });
});

intent("(open|view) (the|) life news", p => {
    p.play("Opening the life news");
    p.play({ command: 'life-new' });
});

intent("(open|view) (the|) technology news", p => {
    p.play("Opening the technology news");
    p.play({ command: 'technology-new' });
});

intent("(open|view) (the|) business news", p => {
    p.play("Opening the business news");
    p.play({ command: 'business-new' });
});

intent("(open|view) (the|) entertainment news", p => {
    p.play("Opening the entertainment news");
    p.play({ command: 'entertainment-new' });
});

intent("(open|view) (the|) first social news", p => {
    p.play("Opening the first social news");
    p.play({ command: 'first-new-of-social' });
});

intent("(open|view) (the|) first sport news", p => {
    p.play("Opening the first sport news");
    p.play({ command: 'first-new-of-sport' });
});

intent("(open|view) (the|) first world news", p => {
    p.play("Opening the first world news");
    p.play({ command: 'first-new-of-world' });
});

intent("start searching (the|) news", p => {
    p.play({ command: 'start-search' });
});

intent("(open|view) (the|) search news", p => {
    p.play("Opening the search news page");
    p.play({ command: 'search-new' });
});

intent("(return|come back) (to|) (the|) (home|main page)", p => {
    p.play("Coming to the home page");
    p.play({ command: 'home-page' });
});

intent("(Which|what|) news i can reads today", p => {
    p.play("You can access to some of categories in our website to read news including social news, sport news, world news and so on");
});

intent("(bye|goodbye|exit) ", p => {
    p.play({ command: 'exit-alan' });
});