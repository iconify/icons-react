import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrlmjdbsl.css';
import '../../css/d/ds62anbdy.css';
import '../../css/z/za_fk3z0n.css';
import '../../css/o/oz5t4ccvy.css';
import '../../css/x/x3rphebkh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrlmjdbsl"/><path class="ds62anbdy"/><path class="za_fk3z0n"/><path class="oz5t4ccvy"/><path class="x3rphebkh"/>`,
		"fallback": "energy-icons:wetland-48-bold",
	});
}

export default Component;
