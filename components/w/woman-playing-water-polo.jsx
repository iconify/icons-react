import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t7_fyybmj.css';
import '../../css/o/o7krsvz8t.css';
import '../../css/q/qkiwgercu.css';
import '../../css/i/iws-ojkrz.css';
import '../../css/j/j9oaf4c2u.css';
import '../../css/y/y6sy6qbup.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t7_fyybmj"/><path class="o7krsvz8t"/><path class="qkiwgercu"/><path class="iws-ojkrz"/><path class="j9oaf4c2u"/><path class="y6sy6qbup"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-playing-water-polo",
	});
}

export default Component;
