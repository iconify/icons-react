import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f-ntwsbcy.css';
import '../../css/m/mpl7mmbxt.css';
import '../../css/x/x9yfijxjr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f-ntwsbcy"/><path class="mpl7mmbxt"/><path class="x9yfijxjr"/></g>`,
		"fallback": "glyphs:wink-duo",
	});
}

export default Component;
