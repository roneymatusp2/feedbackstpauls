import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Plus, Eye, Users } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const observationTypes = [
  "Senior School Learning Observation",
  "Senior School Learning Walk", 
  "Senior School Self Assessment",
  "Senior School Support Plan",
  "Senior School Peer Observation Reflection"
];

const teachers = [
  "Akan, Michael", "Almeida, Fabio", "Ascencio Dias, Ivan",
  "Backhouse, Robin", "Bagnariolli, Eduardo", "Baldon, Enrico",
  "Belmonte, Ana Carolina", "Best, Robert", "Bishop, Sam",
  "Bishop, Chantal", "Cababe, Bruna", "Campanholo, Leonardo",
  "Carvalho, Rodrigo", "Corullon, Mariana", "Costa, Vanessa",
  "Costa, Guilherme", "Crispin, Adam", "De Freitas Carlos, Natalia",
  "Dicks, Jon", "Durham, Michelle", "Edge, Titus",
  "Fabris Jankov, Ana Kristina", "Feitosa, Joao Bosco", "Fregonesi, Angela",
  "Futada, Felipe", "Gaissler, Rubia", "Gilchrist, Ronnie",
  "Gillon, Rodrigo", "Goto, Meire", "Green, Peter",
  "Hall, Daniel", "Hallinan, Barry", "Hartmann, Camila",
  "Hirano, Fabio", "Inhesta, Franli", "Jenkins, Douglas",
  "Kelly, Patrick", "King, Emma", "Lalovic, Ivana",
  "Lanfranchi, Bruno", "Lawrence, Rosemary", "Lima, Natalia",
  "Mack, Laura", "Mann, Alan", "Marchi, Mariana",
  "Martins, Raphael", "Melo, Magda", "Miranda, Heitor",
  "Moreira, Victoria", "Moura, Brena", "Muller, Marcos",
  "Mussnich, Isabel", "Mutyaba, Kibuuka", "Nascimento, Roney",
  "Nash, Charles", "Neto, Djalma", "Neto, Augusto",
  "Neves, Lucas", "Nogueira, Taluan", "Oliveira, Caio",
  "Oliveira, Cicero", "Oparaocha, Martina", "Paganelli, Raquel",
  "Radia, Nikhil", "Rae, Lauren", "Rebelo, Simone",
  "Resende, Vivian", "Sanger, Zoe", "Santiago Chuahy, Adriana",
  "Santos, Heitor", "Schreiber, Franciso", "Scoralick, Patricia",
  "Seidl, Rodrigo", "Silva, Diego", "Sousa, Luiz",
  "Spence, Steven", "Stipp, Daniela", "Tarrant, Jonathan",
  "Towse, David", "Trevaskis, Glen", "Viegas, Shellida",
  "Waszczylko, Justyna"
];

const keyStages = ["NA", "Key Stage 1", "Key Stage 2", "Key Stage 3", "Key Stage 4", "Key Stage 5"];

const subjects = [
  "IB Maths", "IGCSE Maths", "KS3 Maths", "Mathematics",
  "English Literature", "Physics", "Chemistry", "Biology"
];

const Dashboard = () => {
  const [isFormExpanded, setIsFormExpanded] = useState(false);
  const [date, setDate] = useState<Date>();
  const [additionalObservers, setAdditionalObservers] = useState<string[]>([]);
  const [selectedObservationType, setSelectedObservationType] = useState("");
  const [selectedObservee, setSelectedObservee] = useState("");
  const [showSelfAssessmentOptions, setShowSelfAssessmentOptions] = useState(false);
  
  // Current user - should match the header information
  const currentUser = "Roney Nascimento";

  const addObserver = () => {
    setAdditionalObservers([...additionalObservers, ""]);
  };

  const removeObserver = (index: number) => {
    setAdditionalObservers(additionalObservers.filter((_, i) => i !== index));
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <DashboardHeader />
          <div className="flex-1 p-6 space-y-6 relative">
            {/* Background logo with transparency */}
            <div 
              className="absolute inset-0 bg-center bg-no-repeat opacity-15 pointer-events-none"
              style={{ 
                backgroundImage: "url('/src/assets/st-pauls-logo.png')",
                backgroundSize: '350px',
                backgroundPosition: 'center 70%'
              }}
            ></div>
            <div className="max-w-7xl mx-auto relative z-10">
              <h1 className="text-3xl font-bold text-foreground mb-8">Dashboard</h1>
              
              {/* Cards sempre fixos em uma linha */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {/* Card 1: Create a new observation */}
                <Card 
                  className="cursor-pointer hover:shadow-lg transition-shadow" 
                  onClick={() => setIsFormExpanded(true)}
                >
                  <CardContent className="p-0">
                    <div className="h-24 bg-sps-ruby relative flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                      <div className="relative z-10 p-6 text-center">
                        <Plus className="h-10 w-10 text-white mx-auto drop-shadow-sm" />
                      </div>
                    </div>
                    <div className="p-6 bg-gradient-to-b from-background to-background/80">
                      <h3 className="font-semibold text-foreground text-lg mb-2">Create a new observation</h3>
                    </div>
                  </CardContent>
                </Card>

                {/* Card 2: Observations made about you */}
                <Card className="relative overflow-hidden border-0 shadow-elegant hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="h-24 bg-sps-green relative flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                      <div className="relative z-10 p-6 text-center">
                        <Eye className="h-10 w-10 text-white mx-auto drop-shadow-sm" />
                      </div>
                    </div>
                    <div className="p-6 bg-gradient-to-b from-background to-background/80">
                      <h3 className="font-semibold text-foreground text-lg mb-2">Observations made about you</h3>
                    </div>
                  </CardContent>
                </Card>

                {/* Card 3: Observations created by you */}
                <Card className="relative overflow-hidden border-0 shadow-elegant hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="h-24 bg-sps-indigo relative flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                      <div className="relative z-10 p-6 text-center">
                        <Users className="h-10 w-10 text-white mx-auto drop-shadow-sm" />
                      </div>
                    </div>
                    <div className="p-6 bg-gradient-to-b from-background to-background/80">
                      <h3 className="font-semibold text-foreground text-lg mb-2">Observations created by you</h3>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Formulário separado que aparece embaixo */}
              {isFormExpanded && (
                <Card className="w-full">
                  <CardHeader className="bg-sps-ruby text-white">
                    <CardTitle className="flex items-center gap-2">
                      <Plus className="h-5 w-5" />
                      Create a new observation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <Button 
                        onClick={addObserver}
                        className="w-full"
                        variant="outline"
                      >
                        + Add additional observers
                      </Button>
                      
                      {/* Additional Observers */}
                      {additionalObservers.map((observer, index) => (
                        <div key={index} className="flex gap-2">
                          <Select value={observer} onValueChange={(value) => {
                            const newObservers = [...additionalObservers];
                            newObservers[index] = value;
                            setAdditionalObservers(newObservers);
                          }}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select additional observer" />
                            </SelectTrigger>
                            <SelectContent>
                              {teachers.map((teacher) => (
                                <SelectItem key={teacher} value={teacher}>
                                  {teacher}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <Button 
                            variant="outline" 
                            size="icon"
                            onClick={() => removeObserver(index)}
                          >
                            ×
                          </Button>
                        </div>
                      ))}

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">
                            Select Observation Type
                          </label>
                          <Select value={selectedObservationType} onValueChange={(value) => {
                            setSelectedObservationType(value);
                            // Auto-select current user for self-assessment
                            if (value === "Senior School Self Assessment") {
                              setSelectedObservee(currentUser);
                            }
                          }}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Observation Type" />
                            </SelectTrigger>
                            <SelectContent>
                              {observationTypes.map((type) => (
                                <SelectItem key={type} value={type}>
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">
                            Who are you observing?
                          </label>
                          <Select 
                            value={selectedObservee} 
                            onValueChange={setSelectedObservee}
                            disabled={selectedObservationType === "Senior School Self Assessment"}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Who are you observing?" />
                            </SelectTrigger>
                            <SelectContent>
                              {teachers.map((teacher) => (
                                <SelectItem key={teacher} value={teacher}>
                                  {teacher}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">
                            Subject List
                          </label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Subject List" />
                            </SelectTrigger>
                            <SelectContent>
                              {subjects.map((subject) => (
                                <SelectItem key={subject} value={subject}>
                                  {subject}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">
                            Select Key Stage/Class
                          </label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Key Stage/Class" />
                            </SelectTrigger>
                            <SelectContent>
                              {keyStages.map((stage) => (
                                <SelectItem key={stage} value={stage}>
                                  {stage}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">
                            Select Date
                          </label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !date && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Select Date</span>}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                                className="pointer-events-auto"
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Button 
                          className="flex-1" 
                          variant="default"
                          onClick={() => {
                            if (selectedObservationType === "Senior School Self Assessment") {
                              setShowSelfAssessmentOptions(true);
                            } else {
                              // Handle other observation types
                              console.log("Creating observation:", {
                                type: selectedObservationType,
                                observee: selectedObservee,
                                date
                              });
                            }
                          }}
                        >
                          Create Observation
                        </Button>
                        <Button variant="outline" onClick={() => setIsFormExpanded(false)}>
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Self Assessment Options */}
              {showSelfAssessmentOptions && (
                <Card className="w-full mt-6">
                  <CardHeader className="bg-sps-green text-white">
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Self Assessment Configuration
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">
                            Observation Type
                          </label>
                          <Select value={selectedObservationType} disabled>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                          </Select>
                        </div>

                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">
                            Teacher (You)
                          </label>
                          <Select value={selectedObservee} disabled>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                          </Select>
                        </div>

                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">
                            Assessment Type
                          </label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Self Assessment" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="self-assessment">Self Assessment</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">
                            Select Key Stage/Class
                          </label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="NA" />
                            </SelectTrigger>
                            <SelectContent>
                              {keyStages.map((stage) => (
                                <SelectItem key={stage} value={stage}>
                                  {stage}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">
                            Select Date
                          </label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !date && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Select Date</span>}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                                className="pointer-events-auto"
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Button 
                          className="flex-1 bg-black text-white hover:bg-gray-800" 
                          onClick={() => {
                            // Confirm and proceed with self-assessment
                            console.log("Confirming self-assessment options...");
                            // Here you would navigate to the actual self-assessment form
                          }}
                        >
                          Confirm these options
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={() => {
                            setShowSelfAssessmentOptions(false);
                            setIsFormExpanded(false);
                            setSelectedObservationType("");
                            setSelectedObservee("");
                          }}
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;