import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sb9p0zuts.css';
import '../../css/w/wzf5oj_tw.css';
import '../../css/o/ol6pbu0iu.css';
import '../../css/c/c5p98tqtu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sb9p0zuts"/><path clip-rule="evenodd" class="wzf5oj_tw"/><path class="ol6pbu0iu"/><path class="c5p98tqtu"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-bouncing-ball",
	});
}

export default Component;
