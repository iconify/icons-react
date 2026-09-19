import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/azwq7yrxv.css';
import '../../css/s/s-bi71b0s.css';
import '../../css/m/m7fbntb7q.css';
import '../../css/z/z7va8o1ys.css';
import '../../css/h/h-ow21b9t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="azwq7yrxv"/><path class="s-bi71b0s"/><path class="m7fbntb7q"/><path class="z7va8o1ys"/><path class="h-ow21b9t"/></g>`,
		"fallback": "fluent-emoji-flat:world-map",
	});
}

export default Component;
