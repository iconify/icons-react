import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eodsk58is.css';
import '../../css/y/ytrvn63uq.css';
import '../../css/y/ynumbwbdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eodsk58is"/><path class="ytrvn63uq"/><path class="ynumbwbdf"/>`,
		"fallback": "token:ydf",
	});
}

export default Component;
