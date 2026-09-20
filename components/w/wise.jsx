import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrh6l-b4x.css';
import '../../css/r/r98wmc10g.css';
import '../../css/y/ygpkzyb7g.css';
import '../../css/c/cb3t-_oid.css';
import '../../css/q/qh_4148js.css';
import '../../css/t/t60kkwbei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrh6l-b4x"/><path class="r98wmc10g"/><path class="ygpkzyb7g"/><path class="cb3t-_oid"/><path class="qh_4148js"/><path class="t60kkwbei"/>`,
		"fallback": "token:wise",
	});
}

export default Component;
