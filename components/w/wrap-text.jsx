import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqdrapcbo.css';
import '../../css/m/m25ry3gfk.css';
import '../../css/h/hdamidbnm.css';
import '../../css/s/six1ttbia.css';
import '../../css/u/uyzcbshul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqdrapcbo wm-shadow"/><path class="m25ry3gfk wm-k"/><path class="hdamidbnm wm-k"/><path class="six1ttbia wm-a"/><path class="uyzcbshul wm-a"/>`,
		"fallback": "withicons-pastel:wrap-text",
	});
}

export default Component;
