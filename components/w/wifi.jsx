import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pd0bczbtd.css';
import '../../css/o/o-tkjmy1q.css';
import '../../css/b/bqs_bew3a.css';
import '../../css/q/qg0bq2b6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="pd0bczbtd"/><path class="o-tkjmy1q"/><path class="bqs_bew3a"/><path class="qg0bq2b6a"/></g>`,
		"fallback": "iconaut:wifi",
	});
}

export default Component;
