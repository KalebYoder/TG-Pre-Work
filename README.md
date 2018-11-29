# TG-Pre-Work

## When we hit https://www.techtonicgroup.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions.

My connection reaches out to a DNS server, which translates the URL into an IP. Then it directs my browser to the IP, where it connects and starts running the http protocol (secured by SSL).

## From start to finish how does that data reach you to be rendered in the browser?

The http protocol then starts the TCP process, including the three way handshake and starts sending segments, which the client (my browser) acknowledges as it continues to load in order to make sure no packets are completely lost if they are dropped. First it receives the HTML page and begins loading top-down from the header, importing any linked items (fonts, CSS files, JS files, etc) in the head before loading the body. Asynchronously loaded or run JS scripts are the exception, they can be loaded as other HTML data is loaded. Once everything is done loading, it

## What code is rendered in the browser?

The code within the <body> tags of the HTML document.

## What is the server-side code’s main function?

The server-side code's main function is providing the data to the client so that the client can render it for use by the person using the client (me).

## What is the client-side code’s main function?

The client-side code's main function is rendering the data into a human-readable format, including words, images, and videos styled in a certain way and frequently with certain interactive functionality.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

I didn't see anything about this in the coursework, although it's entirely possible I missed it. I also couldn't figure out what to look for on Stack Overflow. My initial instinct is one per tab, although I would think modern browsers would have some sort of caching ability to use shared assets over multiple tabs to help with resource management.

## How many instances of the server-side code are available at any given time?

This is the same thing, where I didn't see anything about it in the coursework and didn't know what to Google for. My first thought is that the instances of code available might be dynamically sized or manually assigned depending on the server configuration. There has to be some way to make multiple instances available per server or else more popular websites such as Twitter, Facebook, or Google wouldn't be able to function without millions of instances. Docker and K8s for container orchestration would make that easier, but containerization's popularity is relatively recent.

My final gut / educated guess answer (based on looking in CPanel on my own site) is that one instance is available by default, unless specifically configured otherwise. On a small site a single instance is sufficient because of how infrequently the same data would be served at the same instant to two clients. Locally hosted videos would probably be different, although I don't know how that would be managed. I do know that intranet sites for companies frequently host their videos on private/unlisted Youtube accounts, possibly to avoid this exact issue. Larger sites have DBAs, server admins, and network admins, and what they do for scalability is mostly beyond my understanding.

## What is runtime?

Runtime is everything that happens while your code is executing. Alternately it means how long something takes to run, I'm not sure which definition is being asked for.

## How many instances of the the databases connected to the server application are created?

This is again one thing that I didn't see covered and wasn't sure how to Google for. However, by default you're only going to have one instance of a server-side database. You can create (or automate creation of) more instances, whether for redundancy, backup, load balancing, etc, but that has to be manually configured.
