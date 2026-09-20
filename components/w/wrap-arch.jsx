import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/y/yetfgtbvu.css';
import '../../css/v/v7yougpow.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="yetfgtbvu"/><path class="v7yougpow"/></g>`,
		"fallback": "streamline-plump:wrap-arch",
	});
}

export default Component;
