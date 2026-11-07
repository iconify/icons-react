import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/v/v90gbqbox.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/h/hrlkjybrs.css';
import '../../css/k/k6xbvzbvu.css';
import '../../css/b/bheqf2b1q.css';
import '../../css/y/y8jdc-bgt.css';
import '../../css/k/kgwbfcbts.css';
import '../../css/h/hdj33kbau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="shu3xdl9q"/><circle class="v90gbqbox"/><circle class="h_tsn8bxt"/><path class="hrlkjybrs"/><path class="k6xbvzbvu"/><path class="bheqf2b1q"/><path class="y8jdc-bgt"/><path class="kgwbfcbts"/><path class="hdj33kbau"/></g>`,
		"fallback": "solar:wheel-linear",
	});
}

export default Component;
