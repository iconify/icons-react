import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/b/bge4e0m_e.css';
import '../../css/d/d9_tw6tfv.css';
import '../../css/r/rsvuxndka.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGuvsWselU"><g class="ufeehvblu"><path class="bge4e0m_e"/><path class="d9_tw6tfv"/><path class="rsvuxndka"/></g></mask></defs><path mask="url(#SVGuvsWselU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:webcam",
	});
}

export default Component;
