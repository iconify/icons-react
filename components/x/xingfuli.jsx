import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/m2blynbna.css';
import '../../css/d/dyg28cb_c.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGEbUP3Hyh"><g class="s9cl3zbei"><path class="m2blynbna"/><path class="dyg28cb_c"/></g></mask></defs><path mask="url(#SVGEbUP3Hyh)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:xingfuli",
	});
}

export default Component;
