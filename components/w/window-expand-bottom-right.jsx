import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rd0kclqig.css';
import '../../css/t/tm2ejbc6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rd0kclqig"/><path class="tm2ejbc6y"/></g>`,
		"fallback": "reicon:window-expand-bottom-right",
	});
}

export default Component;
