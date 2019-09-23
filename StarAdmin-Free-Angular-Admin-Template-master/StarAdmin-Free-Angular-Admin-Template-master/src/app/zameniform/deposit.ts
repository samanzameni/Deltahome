export class Deposit {

    public adviser_id: any;
    public adviser_title: any;
    public ownerName: any;
    public ownerPhone: any;
    public ownerMobile: any;
    public region_id: string;
    public region_title: string;
    public address: any;
    public propertyType_id: string;
    public propertyType_title: string;
    public shopCenterCount: number; // storeys
    public floorNumber: number; // number of floor
    public floorCount: number; //  floor
    public unitInFloor: number; // apartment in floor
    public buildingArea: number;
    public bathCount: number;
    public bedCount: number;
    public furnished: boolean;
    public semiFurnished: boolean;
    public buildingAge: number;
    public renovate: boolean;
    public monthlyRent: number;
    public kitchenService_id: string;
    public kitchenService_title: string;
    public isAdvertisement: boolean; // open kitchen
    public floorCover_id: string; // material
    public floorCover_title: string;
    public telLineCount: number;
    public garage: boolean;
    public storage: boolean;
    public firePlug: boolean;
    public depositFacilities: any[] = [];
    public seoDescription: string;
    public seoTitle: string;
    public latitude: any;
    public longitude: any;
    public depositFac: number[] = [];
    public depositFac_title: string[] = [];
    public depositImg: any[] = [];
    public baseImagePath: any;
}
