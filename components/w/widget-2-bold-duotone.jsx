import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yawhug1ht.css';
import '../../css/i/ikdqng8fd.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/c/czjpdqrfy.css';
import '../../css/m/mz-sgwb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yawhug1ht"/><path class="ikdqng8fd"/><g class="xtpeb-edw"><path class="czjpdqrfy"/><path class="mz-sgwb5c"/></g>`,
		"fallback": "solar:widget-2-bold-duotone",
	});
}

export default Component;
