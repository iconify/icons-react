import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/udt_089ya.css';
import '../../css/g/gj8qz0jcg.css';
import '../../css/t/tbt_cbc6x.css';
import '../../css/c/c6ffpibmk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="udt_089ya"/><path class="gj8qz0jcg"/><path class="tbt_cbc6x"/><path class="c6ffpibmk"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-wrestling",
	});
}

export default Component;
