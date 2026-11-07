import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5yirlatd.css';
import '../../css/o/ozjn960ga.css';
import '../../css/z/zi-y_bbxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5yirlatd"/><path class="ozjn960ga"/><path class="zi-y_bbxk"/>`,
		"fallback": "solar:widget-4-bold-duotone",
	});
}

export default Component;
