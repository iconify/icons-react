import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fcests5fk.css';
import '../../css/b/bjfx3cb5v.css';
import '../../css/n/ncnj5_b4g.css';
import '../../css/i/i9o_2wdta.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fcests5fk"/><path clip-rule="evenodd" class="bjfx3cb5v"/><path class="ncnj5_b4g"/><path clip-rule="evenodd" class="i9o_2wdta"/></g>`,
		"fallback": "glyphs:zoom-out-outline",
	});
}

export default Component;
