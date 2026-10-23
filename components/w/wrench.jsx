import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/h/h2peg3blj.css';
import '../../css/a/a-j9obb4j.css';
import '../../css/t/tyqi67ijp.css';
import '../../css/r/rj25issda.css';
import '../../css/k/ko2uz_bqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="h2peg3blj"/><path class="a-j9obb4j"/><path class="tyqi67ijp"/><path class="rj25issda"/><path class="ko2uz_bqq"/></g>`,
		"fallback": "matita:wrench",
	});
}

export default Component;
