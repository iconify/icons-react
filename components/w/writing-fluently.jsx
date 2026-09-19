import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/s/sogwu_blw.css';
import '../../css/o/oxwok6s3g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path clip-rule="evenodd" class="sogwu_blw"/><path class="oxwok6s3g"/></g>`,
		"fallback": "icon-park:writing-fluently",
	});
}

export default Component;
