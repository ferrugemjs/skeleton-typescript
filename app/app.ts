//starter
import { platform } from '@ferrugemjs/library';
import HelloWorld from './hello-world/hello-world.html';

platform.bootstrap(
    HelloWorld,
    {
        templateExtension: ".html"
    }
).at(document.getElementById('init-app'))

// console.log(platform, 'ops');

// console.log(HelloWorld);

// bootstrapper();
