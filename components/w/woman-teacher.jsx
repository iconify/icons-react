import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xrkobbbky.css';
import '../../css/y/ytm50bbpo.css';
import '../../css/z/zkrfqviou.css';
import '../../css/g/gidk2cb2i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xrkobbbky"/><path class="ytm50bbpo"/><path class="zkrfqviou"/><path class="gidk2cb2i"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-teacher",
	});
}

export default Component;
