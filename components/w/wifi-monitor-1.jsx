import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gczf6hboe.css';
import '../../css/m/m-s7vzbkn.css';
import '../../css/f/f-du83bit.css';
import '../../css/f/fmf_2ccuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="gczf6hboe"/><path class="m-s7vzbkn"/><path class="f-du83bit"/><path class="fmf_2ccuj"/></g>`,
		"fallback": "streamline-freehand-color:wifi-monitor-1",
	});
}

export default Component;
