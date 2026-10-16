import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_519lb4c.css';
import '../../css/z/zg50c1boz.css';
import '../../css/e/ectprf4rs.css';
import '../../css/i/iuz5iu7bw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_519lb4c"/><path class="zg50c1boz"/><path class="ectprf4rs"/><path class="iuz5iu7bw"/>`,
		"fallback": "energy-icons:wood-pole-48-bold",
	});
}

export default Component;
