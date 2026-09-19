import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/q/qbsx6nwvy.css';
import '../../css/u/u35230b0d.css';
import '../../css/d/d3i11ojwr.css';
import '../../css/v/v2z08vbwf.css';
import '../../css/i/i8tzp7bmz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="qbsx6nwvy"/><path class="u35230b0d"/><path class="d3i11ojwr"/><path class="v2z08vbwf"/><path class="i8tzp7bmz"/></g>`,
		"fallback": "icon-park:whirlwind",
	});
}

export default Component;
