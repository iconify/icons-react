import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylrso7y3c.css';
import '../../css/q/qhcun_l9h.css';
import '../../css/d/d4_2msbzg.css';
import '../../css/q/q3w-2jpjr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGbfzjNdrO"><g class="ylrso7y3c"><path class="qhcun_l9h"/><path class="d4_2msbzg"/><path class="q3w-2jpjr"/></g></mask></defs><path mask="url(#SVGbfzjNdrO)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:webcam",
	});
}

export default Component;
