import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/y/yruzez1gq.css';
import '../../css/e/eog0g2beg.css';
import '../../css/y/yawhug1ht.css';
import '../../css/y/yi8dv1b1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="yruzez1gq"/><path class="eog0g2beg"/></g><path class="yawhug1ht"/><path class="yi8dv1b1n"/>`,
		"fallback": "solar:widget-bold-duotone",
	});
}

export default Component;
