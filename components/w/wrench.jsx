import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/csgxn_bdv.css';
import '../../css/c/cu187kbng.css';
import '../../css/x/xcapk5bam.css';
import '../../css/j/jk6o2bb-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="csgxn_bdv wm-shadow"/><path class="cu187kbng wm-shadow"/><path class="xcapk5bam"/><path class="jk6o2bb-p"/></g>`,
		"fallback": "withicons-brutal:wrench",
	});
}

export default Component;
