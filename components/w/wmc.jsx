import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6y36oe8d.css';
import '../../css/b/biue_cm9l.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6y36oe8d"/><path class="biue_cm9l"/>`,
		"fallback": "gis:wmc",
	});
}

export default Component;
