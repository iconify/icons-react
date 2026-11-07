import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/h/hrlkjybrs.css';
import '../../css/k/k6xbvzbvu.css';
import '../../css/b/bheqf2b1q.css';
import '../../css/y/y8jdc-bgt.css';
import '../../css/k/kgwbfcbts.css';
import '../../css/h/hdj33kbau.css';
import '../../css/k/ko6o-6b9b.css';
import '../../css/e/ew92mhbfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="h_tsn8bxt"/><path class="hrlkjybrs"/><path class="k6xbvzbvu"/><path class="bheqf2b1q"/><path class="y8jdc-bgt"/><path class="kgwbfcbts"/><path class="hdj33kbau"/><path class="ko6o-6b9b"/><path class="ew92mhbfo"/></g>`,
		"fallback": "solar:wheel-broken",
	});
}

export default Component;
