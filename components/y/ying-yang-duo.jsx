import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vyr8subuc.css';
import '../../css/b/b-0n9n53y.css';
import '../../css/s/sy3dwp2bt.css';
import '../../css/g/gzw9wyn5d.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vyr8subuc"/><path clip-rule="evenodd" class="b-0n9n53y"/><path class="sy3dwp2bt"/><path class="gzw9wyn5d"/></g>`,
		"fallback": "glyphs:ying-yang-duo",
	});
}

export default Component;
