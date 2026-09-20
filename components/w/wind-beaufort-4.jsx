import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tlw2svjrv.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tlw2svjrv"/>`,
		"fallback": "wi:wind-beaufort-4",
	});
}

export default Component;
