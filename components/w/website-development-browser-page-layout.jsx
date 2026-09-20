import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s3kqs_pxg.css';
import '../../css/n/nrtos7ylu.css';
import '../../css/h/hcrmp_nmg.css';
import '../../css/d/d23he_y3v.css';
import '../../css/t/tyuiy3b4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s3kqs_pxg"/><path class="nrtos7ylu"/><path class="hcrmp_nmg"/><path class="d23he_y3v"/><path class="tyuiy3b4j"/></g>`,
		"fallback": "streamline-freehand-color:website-development-browser-page-layout",
	});
}

export default Component;
