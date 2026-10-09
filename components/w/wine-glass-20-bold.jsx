import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kexdcibjn.css';
import '../../css/g/ggqjhtbos.css';
import '../../css/m/mraa0lb0l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kexdcibjn"/><path class="ggqjhtbos"/><path class="mraa0lb0l"/>`,
		"fallback": "energy-icons:wine-glass-20-bold",
	});
}

export default Component;
