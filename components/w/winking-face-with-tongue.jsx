import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wuc-gsb7x.css';
import '../../css/f/f-cjokbhf.css';
import '../../css/u/ueyk_db5a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wuc-gsb7x"/><path class="f-cjokbhf"/><path class="ueyk_db5a"/></g>`,
		"fallback": "fluent-emoji-high-contrast:winking-face-with-tongue",
	});
}

export default Component;
