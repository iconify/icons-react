import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/o/o0ihmsbgn.css';
import '../../css/s/sc6l7vb1a.css';
import '../../css/o/oki_akbvh.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="o0ihmsbgn"/><path class="sc6l7vb1a"/><path class="oki_akbvh"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:wifi-low",
	});
}

export default Component;
