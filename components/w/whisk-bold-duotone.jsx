import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bji9ibcha.css';
import '../../css/b/boq_u9ond.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bji9ibcha"/><path class="boq_u9ond"/>`,
		"fallback": "solar:whisk-bold-duotone",
	});
}

export default Component;
