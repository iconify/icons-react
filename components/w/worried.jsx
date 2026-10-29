import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kddx2tbsb.css';
import '../../css/z/zc6bqab-k.css';
import '../../css/v/vomueybnb.css';
import '../../css/x/xdt5s-nuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="kddx2tbsb wm-k"/><path class="wm-s zc6bqab-k"/><path class="vomueybnb"/><path class="xdt5s-nuj"/></g>`,
		"fallback": "withicons-bauhaus:worried",
	});
}

export default Component;
