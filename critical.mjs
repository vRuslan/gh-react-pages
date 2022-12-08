import {generate} from 'critical';

generate({
    inline: true,
    base: 'build/',
    src: 'index.html',
    target: 'index.html',
    width: 1300,
    height: 900,
});
