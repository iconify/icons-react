import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/by140xbel.css';
import '../../css/o/ow_ygzbys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="by140xbel"/><path class="ow_ygzbys"/>`,
		"fallback": "bxl:weibo",
	});
}

export default Component;
