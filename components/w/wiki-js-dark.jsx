import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1sbn6b6w.css';
import '../../css/c/cgswefbbx.css';
import '../../css/y/yj6-z6b3u.css';
import '../../css/p/pfrpmpb1c.css';
import '../../css/r/r5bsbvxly.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z1sbn6b6w"/><path class="cgswefbbx"/><path class="yj6-z6b3u"/><path class="pfrpmpb1c"/><path class="r5bsbvxly"/>`,
		"fallback": "selfhst:wiki-js-dark",
	});
}

export default Component;
