import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/duuf9m24f.css';
import '../../css/g/gj0wcwb7j.css';
import '../../css/y/ym_5dj0al.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="duuf9m24f"/><path class="gj0wcwb7j"/><path class="ym_5dj0al"/>`,
		"fallback": "eva:wifi-fill",
	});
}

export default Component;
